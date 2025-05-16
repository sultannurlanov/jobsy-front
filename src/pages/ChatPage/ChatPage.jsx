import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Paper,
  Avatar,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';

// Импортируй свои SVG-иконки
import { ReactComponent as PhoneIcon } from '../../assets/icons/PhoneIcon.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/MoreIcon.svg';
import { ReactComponent as SendIconCustom } from '../../assets/icons/SendIconCustom.svg';

export default function ChatPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Даниэль на выходных ты добьешь сервер JWT , на следующей недели давай уже подключим API',
      time: '16 мая 2025, 20:20',
      fromMe: true,
    },
    {
      id: 2,
      text: 'Да я на выходных все сделаю и буюрса на след недели мы подключим API еще как закончу РСК  буду больше уделять время над нашим проектом',
      time: '16 мая 2025, 20:28',
      fromMe: false,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // пример аватарки
    },
  ]);

  const user = {
    name: 'Асанов Асан',
    lastSeen: 'Был в сети: 12 мин назад',
  };
  const vacancy = {
    id: 1,
    title: 'Уголь ташыганы адам керек something...',
    price: '2000 сом',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  };

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
          <IconButton sx={{ p: 1.2 }}>
            <PhoneIcon style={{ color: '#757575', width: 24, height: 24 }} />
          </IconButton>
          <IconButton>
            <MoreIcon style={{ color: '#757575', width: 24, height: 24 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Карточка вакансии - кликабельная */}
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
            {/* Аватарка только у входящих */}
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
