import React from 'react';
import { IconButton, Box, Avatar, Typography, Chip, Button } from '@mui/material';
import { ReactComponent as BackArrowIcon } from '../../assets/icons/BackArrowIcon.svg';
import { ReactComponent as PriceIcon } from '../../assets/icons/PriceIcon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/CalendarIcon.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/ClockIcon.svg';
import { useNavigate } from 'react-router-dom';

// Компонент для строки с иконкой и текстом
function InfoRow({ icon: Icon, text }) {
  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Box sx={{ width: 22, height: 22, mr: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{ width: 20, height: 20 }} />
      </Box>
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
}

export default function VacancyDetails() {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', padding: 6, maxWidth: 600, mx: 'auto' }}>
      {/* Кнопка назад */}
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          position: 'absolute',
          top: { xs: 12, sm: 16 },
          left: { xs: 12, sm: 4 },
          zIndex: 10,
          backgroundColor: '#fff',
        }}
      >
        <BackArrowIcon style={{ width: 28, height: 30 }} />
      </IconButton>

      {/* Картинка вакансии */}
      <Box
        sx={{
          width: '100%',
          height: 180,
          backgroundColor: '#f5f5f5',
          mt:6,
          mb: 5,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
          alt="Вакансия"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Автор и имя */}
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar sx={{ mr: 1 }}>А</Avatar>
        <Typography variant="subtitle1" fontWeight="bold">
          Асанов Асан
        </Typography>
      </Box>

      {/* Заголовок */}
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Уголь ташыганы адам керек
      </Typography>

      {/* Дата публикации */}
      <Typography variant="body2" color="text.secondary" mb={1}>
        Опубликовано – 9.01.25
      </Typography>
      <Box borderBottom="1px solid #eee" mb={1} />

      {/* Информация с иконками */}
      <InfoRow icon={PriceIcon} text="2000 сом" />
      <InfoRow icon={CalendarIcon} text="8 март" />
      <InfoRow icon={ClockIcon} text="14:00-19:30" />

      {/* Описание */}
      <Typography variant="body1" mb={2}>
        Требуется работник для физической работы на 2 часа. Задача - переноска угля. Работа подходит для выносливых людей, готовых к физической нагрузке. Оплата обсуждается.
      </Typography>

      {/* Теги */}
      <Box mb={2}>
        <Chip label="#перевозкагруза" sx={{ mr: 1 }} />
        <Chip label="#почасоваяработа" sx={{ mr: 1 }} />
        <Chip label="#уголь" />
      </Box>

      {/* Похожие посты */}
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Похожие посты
      </Typography>
      <Box display="flex" gap={2} mb={2}>
        <Box sx={{ width: 120, height: 90, background: '#eee', borderRadius: 2, overflow: 'hidden' }}>
          {/* Здесь можно добавить картинку и инфо похожего поста */}
        </Box>
        <Box sx={{ width: 120, height: 90, background: '#eee', borderRadius: 2, overflow: 'hidden' }}>
          {/* Здесь можно добавить картинку и инфо похожего поста */}
        </Box>
      </Box>

      {/* Кнопки "Позвонить" и "Начать чат" */}
      <Box display="flex" gap={2} mb={2}>
        <Button variant="contained" color="success" sx={{ flex: 1 }}>
          Позвонить
        </Button>
        <Button variant="contained" color="warning" sx={{ flex: 1 }}>
          Начать чат
        </Button>
      </Box>
    </Box>
  );
}
