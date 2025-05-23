import React, { useEffect } from 'react';
import { IconButton, Box, Avatar, Typography, Chip, Button } from '@mui/material';
import { ReactComponent as BackArrowIcon } from '../../assets/icons/BackArrowIcon.svg';
import { ReactComponent as PriceIcon } from '../../assets/icons/PriceIcon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/CalendarIcon.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/ClockIcon.svg';
import { ReactComponent as NoImageIcon } from '../../assets/icons/NoImageIcon.svg';
import { useNavigate, useParams } from 'react-router-dom';



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


// Пример данных похожих постов
const similarPosts = [
  {
    id: 1,
    title: '2 бала керек эртенкиге',
    schedule: 'График: не указан',
    price: '2000 сом',
    published: 'Опубликовано – 1.03.25',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  },
  {
    id: 2,
    title: 'Мясник на той',
    schedule: 'График: не указан',
    price: '8000 сом',
    published: 'Опубликовано – 5.03.25',
    imageUrl: null,
  },
];

export default function VacancyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Здесь можно загрузить данные вакансии по id из API
    console.log('Загружаем данные вакансии с id:', id);
  }, [id]);

  return (
    <Box sx={{ position: 'relative', padding: 6, paddingBottom: 14, maxWidth: 600, mx: 'auto' }}>
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
          mt: 6,
          mb: 5,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
          alt="Вакансия"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '12px' }}
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
        Уголь ташыганы адам керек (id: {id})
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        <Chip
          label="#перевозкагруза"
          sx={{
            bgcolor: '#F5F5F5',
            '& .MuiChip-label': {
              color: '#2F80ED',
              fontWeight: 500,
            },
          }}
        />
        <Chip
          label="#почасоваяработа"
          sx={{
            bgcolor: '#F5F5F5',
            '& .MuiChip-label': {
              color: '#2F80ED',
              fontWeight: 500,
            },
          }}
        />
        <Chip
          label="#уголь"
          sx={{
            bgcolor: '#F5F5F5',
            '& .MuiChip-label': {
              color: '#2F80ED',
              fontWeight: 500,
            },
          }}
        />
      </Box>

      {/* Похожие посты */}
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Похожие посты
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', mb: 2 }}>
        {similarPosts.map((post) => (
          <Box
            key={post.id}
            onClick={() => navigate(`/vacancy/${post.id}`)}
            sx={{
              flex: 1,
              minWidth: 0,
              bgcolor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                height: 90,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: post.imageUrl ? undefined : '#eee',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '12px',
                  }}
                />
              ) : (
                <NoImageIcon
                  style={{
                    width: 40,
                    height: 40,
                    opacity: 0.8,
                    display: 'block',
                  }}
                />
              )}
            </Box>
            <Box sx={{ p: 1.5, bgcolor: '#fff', flexGrow: 1 }}>
              <Typography variant="subtitle2" fontWeight={500} sx={{ mb: 0.5 }}>
                {post.title}
              </Typography>
              {post.schedule === 'График: не указан' ? (
                <Chip
                  label={post.schedule}
                  sx={{
                    bgcolor: '#F0F2F5',
                    color: '#1C1C1C80',
                    fontWeight: 500,
                    fontSize: 14,
                    borderRadius: '8px',
                    height: 24,
                    px: 1.5,
                    mb: 0.5,
                  }}
                  variant="filled"
                  size="small"
                />
              ) : (
                <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
                  {post.schedule}
                </Typography>
              )}
              <Typography variant="subtitle1" fontWeight="bold">
                {post.price}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {post.published}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Фиксированная панель снизу */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            mx: 'auto',
            bgcolor: '#fff',
            borderTop: '1px solid #eee',
            py: 2,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.04)',
            pointerEvents: 'auto',
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            2000 сом
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#E1F0B9',
                color: '#000',
                '&:hover': { bgcolor: '#d0e6a6' },
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: 'none',
                minWidth: 110,
              }}
            >
              Позвонить
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#F98C53',
                color: '#fff',
                '&:hover': { bgcolor: '#e07b3d' },
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: 'none',
                minWidth: 110,
              }}
              onClick={() => navigate('/chats/1')} // 1 - id пользователя для чата
            >
              Начать чат
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
