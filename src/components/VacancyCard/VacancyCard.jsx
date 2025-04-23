import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

export default function VacancyCard({ employmentType, color, textColor }) {
  // Функция, которая выбирает текст и цвет для "График: не указан"
  const getChipProps = () => {
    if (employmentType === null) {
      return {
        label: "График: не указан",
        sx: { bgcolor: '#EEEEEE', color: '#757575', mt: 1 }
      };
    } else {
      return {
        label: employmentType,
        sx: { bgcolor: color, color: textColor, mt: 1 }
      };
    }
  };

  const chipProps = getChipProps();

  return (
    <Link to="/vacancy/1" style={{ textDecoration: 'none' }}>
      <Card sx={{
        borderRadius: '16px',
        boxShadow: 'none',
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
        flexGrow: 1, // Add flexGrow
      }}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="Вакансия"
          sx={{ borderRadius: '16px 16px 0 0' }}
        />
        <CardContent sx={{ padding: '12px', flexGrow: 1 }}>
          <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: 'inherit' }}>
            Массажист персональный
          </Typography>
          <Chip label={chipProps.label} size="small" sx={chipProps.sx} />
          <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'inherit' }}>
              3000 сом
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ padding: '0 12px 12px', display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="caption" color="text.secondary" sx={{ color: '#757575' }}>
            Опубликовано 8м назад
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
