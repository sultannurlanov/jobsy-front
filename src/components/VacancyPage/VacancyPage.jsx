import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Avatar,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function VacancyPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Получаем функцию navigate

  const handleGoBack = () => {
    navigate(-1); // Используем функцию navigate для перехода назад
  };

  return (
    <Container style={{ marginTop: '60px' }}>
      <IconButton
        onClick={handleGoBack}
        aria-label="назад"
        style={{
          color: '#000', // Цвет иконки
          backgroundColor: '#fff', // Фон кнопки
          borderRadius: '50%', // Круглая форма
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Тень
          position: 'absolute', // Абсолютное позиционирование
          top: '16px', // Отступ сверху
          left: '16px', // Отступ слева
          zIndex: '10', // Отображаем кнопку поверх всего контента
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Box mt={2} display="flex" alignItems="center">
        <Avatar sx={{ mr: 1 }}>А</Avatar>
        <Typography variant="subtitle1" fontWeight="bold">
          Асанов Асан
        </Typography>
      </Box>
      <img
        src="https://source.unsplash.com/random"
        alt="Вакансия"
        style={{ width: '100%', borderRadius: '16px' }}
      />

      <Box mt={1}>
        <Typography variant="h6" fontWeight="bold">
          Уголь ташыганы адам керек
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Опубликовано 9.01.25
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" fontWeight="bold">
          2000 сом
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="body1">
          Требуется работник для физической работы на 2 часа. Задача - переноска угля.
        </Typography>
      </Box>

      <Box mt={2}>
        <Chip label="#перевозкагруза" />
        <Chip label="#почасоваяработа" />
        <Chip label="#уголь" />
      </Box>

      <Box mt={4}>
        <Typography variant="h6" fontWeight="bold">
          Похожие посты
        </Typography>
        {/* Здесь будут похожие вакансии */}
      </Box>

      <Box mt={2} display="flex" justifyContent="space-around">
        <Button variant="contained" color="success">
          Позвонить
        </Button>
        <Button variant="contained" color="warning">
          Начать чат
        </Button>
      </Box>
    </Container>
  );
}
