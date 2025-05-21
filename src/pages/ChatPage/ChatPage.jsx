import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Paper,
  Avatar,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allChats } from './allChats';

// Импорт SVG-иконок
import { ReactComponent as PhoneIcon } from '../../assets/icons/PhoneIcon.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/MoreIcon.svg';
import { ReactComponent as SendIconCustom } from '../../assets/icons/SendIconCustom.svg';
import { ReactComponent as PhoneBlockedIcon } from '../../assets/icons/PhoneBlockedIcon.svg';

// Кнопка телефона с модалкой
function ChatPhoneButton({ phoneNumber, canCall }) {
  const [open, setOpen] = useState(false);

  const handleCallClick = () => {
    if (canCall) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <IconButton onClick={handleCallClick} sx={{ p: 1.2 }}>
        <PhoneIcon style={{ width: 24, height: 24, color: '#222' }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 0,
            minWidth: 320,
            maxWidth: 340,
          },
        }}
      >
        <DialogContent sx={{ textAlign: 'center', p: 3, pb: 2 }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            <PhoneBlockedIcon style={{ width: 48, height: 48, color: '#BDBDBD' }} />
          </Box>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
            Не удалось дозвониться
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Этот пользователь не принимает звонки.<br />
            Для связи используйте только текстовые сообщения
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: '#F98C53',
              color: '#fff',
              fontWeight: 500,
              borderRadius: 2,
              boxShadow: 'none',
              textTransform: 'none',
              fontSize: 16,
              py: 1.2,
              '&:hover': { bgcolor: '#e6783f' },
            }}
            onClick={() => setOpen(false)}
          >
            Хорошо
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

// --- ОСНОВНОЙ КОМПОНЕНТ ---
export default function ChatPage() {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const chat = allChats.find(c => c.id === chatId);

  // Хуки объявляем ДО любого return!
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chat ? chat.messages : []);

  // --- Состояния для меню ---
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuOpen = (event) => setMenuAnchorEl(event.currentTarget);
  const handleMenuClose = () => setMenuAnchorEl(null);

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: message,
        time: new Date().toLocaleString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        fromMe: true,
      },
    ]);
    setMessage('');
  };

  if (!chat) return <div>Чат не найден</div>;

  const user = chat.user;
  const vacancy = chat.vacancy;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: 600 },
        height: '100vh',
        minHeight: '100dvh',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        boxShadow: { xs: 'none', md: '0 0 16px rgba(0,0,0,0.04)' },
      }}
    >
      {/* Верхняя панель */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 1,
          py: 1,
          borderBottom: '1px solid #eee',
          minHeight: 56,
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ color: '#222' }}>
          <ArrowBackIcon />
        </IconButton>
        <Box flex={1} sx={{ ml: 1.5 }}>
          <Typography fontWeight="bold" variant="subtitle1">
            {user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {user.lastSeen}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {/* Вот здесь используем ChatPhoneButton */}
          <ChatPhoneButton phoneNumber={user.phoneNumber} canCall={user.canCall} />
          <IconButton onClick={handleMenuOpen}>
            <MoreIcon style={{ color: '#222', width: 24, height: 24 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Меню трёх точек */}
      <Menu
        anchorEl={menuAnchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            bgcolor: '#FAFAFA',
            boxShadow: '0px 4px 24px rgba(0,0,0,0.10)',
            p: 0,
          },
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            color: '#000',
            fontSize: 16,
            fontWeight: 400,
            '&:hover': { bgcolor: '#FAFAFA' },
          }}
        >
          Выкл. уведомление
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            color: '#000',
            fontSize: 16,
            fontWeight: 400,
            '&:hover': { bgcolor: '#FAFAFA' },
          }}
        >
          Пожаловаться
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            color: '#000',
            fontSize: 16,
            fontWeight: 400,
            '&:hover': { bgcolor: '#FAFAFA' },
          }}
        >
          Заблокировать
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            color: '#000',
            fontSize: 16,
            fontWeight: 400,
            '&:hover': { bgcolor: '#FAFAFA' },
          }}
        >
          Очистить чат
        </MenuItem>
      </Menu>

      {/* Карточка вакансии */}
      <Link
        to={`/vacancy/${vacancy.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 2,
            borderRadius: 2,
            bgcolor: '#F5F5F5',
            my: 1,
            cursor: 'pointer',
            transition: 'background 0.2s',
            color: '#000',
            '&:hover': { bgcolor: '#ececec' },
          }}
        >
          <Avatar
            variant="rounded"
            src={vacancy.image}
            sx={{ width: 56, height: 40, mr: 1 }}
            alt="vacancy"
          />
          <Box flex={1} minWidth={0}>
            <Typography noWrap fontWeight={500} sx={{ color: 'inherit' }}>
              {vacancy.title}
            </Typography>
            <Typography color="text.secondary" fontSize={14} sx={{ color: 'inherit' }}>
              {vacancy.price}
            </Typography>
          </Box>
          <ArrowForwardIosIcon sx={{ color: 'inherit', fontSize: 18, ml: 1 }} />
        </Box>
      </Link>

      {/* Контент чата */}
      <Box sx={{ flex: 1, bgcolor: "#fff", px: 1, py: 2, overflowY: 'auto' }}>
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              justifyContent: msg.fromMe ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            {!msg.fromMe && (
              <Avatar
                src={msg.avatar}
                sx={{ width: 28, height: 28, mr: 1, alignSelf: 'flex-end' }}
              />
            )}
            <Box
              sx={{
                bgcolor: msg.fromMe ? '#F98C53' : '#F5F5F5',
                color: msg.fromMe ? '#fff' : '#222',
                borderRadius: 2,
                px: 2,
                py: 1,
                maxWidth: '75%',
                boxShadow: msg.fromMe ? '0 2px 8px #f98c5322' : '0 2px 8px #ddd4',
              }}
            >
              <Typography sx={{ wordBreak: 'break-word' }}>{msg.text}</Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  color: msg.fromMe ? '#fff9' : '#888',
                  mt: 0.5,
                  textAlign: 'right',
                  fontSize: 12,
                }}
              >
                {msg.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Поле ввода сообщения */}
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 1,
          py: 0.5,
          borderRadius: 0,
          borderTop: '1px solid #eee',
          bgcolor: '#fff',
        }}
        elevation={0}
      >
        <IconButton aria-label="Add attachment">
          <AddIcon sx={{ color: '#BDBDBD' }} />
        </IconButton>
        <InputBase
          value={message}
          onChange={handleChange}
          sx={{
            ml: 1,
            flex: 1,
            bgcolor: '#F5F5F5',
            borderRadius: 2,
            px: 2,
            py: 0.5,
            fontSize: 18,
            '::placeholder': { color: '#BDBDBD', opacity: 1 },
          }}
          placeholder="Напишите сообщение"
          inputProps={{ 'aria-label': 'Напишите сообщение' }}
        />
        <IconButton
          type="submit"
          disabled={!message.trim()}
          sx={{
            color: message.trim() ? '#F98C53' : '#BDBDBD',
            cursor: message.trim() ? 'pointer' : 'default',
          }}
          aria-label="Send message"
        >
          <SendIconCustom style={{ width: 28, height: 28 }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
