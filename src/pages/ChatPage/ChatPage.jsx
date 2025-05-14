import React from 'react';
import { Box, Avatar, Typography, IconButton, InputBase, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

export default function ChatPage() {
  const navigate = useNavigate();

  const user = {
    name: 'Асанов Асан',
    lastSeen: 'Был в сети: 12 мин назад',
    avatar: null,
  };
  const vacancy = {
    title: 'Уголь ташыганы адам керек something...',
    price: '2000 сом',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600, // Совпадает с VacancyDetails
        height: '100vh',
        minHeight: '100dvh', // для мобильных браузеров
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        boxShadow: { xs: 'none', md: '0 0 16px rgba(0,0,0,0.04)' },
      }}
    >
      {/* Верхняя панель */}
      <Box sx={{
        display: 'flex', alignItems: 'center', px: 1, py: 1,
        borderBottom: '1px solid #eee', minHeight: 56
      }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Avatar sx={{ mx: 1 }}>{user.avatar || user.name[0]}</Avatar>
        <Box flex={1}>
          <Typography fontWeight="bold" variant="subtitle1">{user.name}</Typography>
          <Typography variant="caption" color="text.secondary">{user.lastSeen}</Typography>
        </Box>
        <IconButton><CallIcon /></IconButton>
        <IconButton><MoreVertIcon /></IconButton>
      </Box>

      {/* Карточка вакансии */}
      <Box sx={{
        display: 'flex', alignItems: 'center', px: 2, py: 2,
        borderBottom: '1px solid #eee'
      }}>
        <Avatar
          variant="rounded"
          src={vacancy.image}
          sx={{ width: 56, height: 40, mr: 1 }}
        />
        <Box flex={1}>
          <Typography noWrap fontWeight={500}>{vacancy.title}</Typography>
          <Typography color="text.secondary" fontSize={14}>{vacancy.price}</Typography>
        </Box>
      </Box>

      {/* Контент чата (пока пусто) */}
      <Box sx={{ flex: 1, bgcolor: '#fff' }} />

      {/* Поле ввода сообщения */}
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 1,
          py: 0.5,
          borderRadius: 0,
          borderTop: '1px solid #eee',
        }}
        elevation={0}
      >
        <IconButton>
          <AddIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, bgcolor: '#F5F5F5', borderRadius: 2, px: 2, py: 0.5 }}
          placeholder="Напишите сообщение"
          inputProps={{ 'aria-label': 'Напишите сообщение' }}
        />
        <IconButton color="primary" type="submit">
          <SendIcon sx={{ color: '#F98C53' }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
