import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

export default function VacancyCard({ employmentType }) { // Принимаем пропс
  return (
    <Link to="/vacancy/1" style={{ textDecoration: 'none' }}>
      <Card sx={{
        borderRadius: '16px',
        boxShadow: 'none',
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
      }}>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="Вакансия"
          sx={{ borderRadius: '16px 16px 0 0' }}
        />
        <CardContent sx={{ padding: '16px', flexGrow: 1 }}>
          <Typography variant="h6" component="div" fontWeight="bold" sx={{ color: 'inherit' }}>
            Массажист персональный
          </Typography>
          {employmentType ? (
            <Chip label={employmentType} size="small" sx={{ bgcolor: '#E8F5E9', color: '#43A047', mt: 1 }} />
          ) : (
            <Chip label="График: не указан" size="small" sx={{ bgcolor: '#EEEEEE', color: '#757575', mt: 1 }} />
          )}
          <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'inherit' }}>
              3000 сом
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ padding: '0 16px 16px', display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="caption" color="text.secondary" sx={{ color: '#757575' }}>
            Опубликовано 8м назад
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
