import React from 'react';
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import { Grid, Container } from '@mui/material';

export default function Home() {
  const cardsData = [
    { id: 1, employmentType: "Сегодня с 10:00 до 12:00" },
    { id: 2, employmentType: "Долгосрочная работа" },
    { id: 3, employmentType: null }, // График не указан
    { id: 4, employmentType: "Полный день" },
    { id: 5, employmentType: null }, // График не указан
    { id: 6, employmentType: "Сегодня с 14:00 до 18:00" },
    { id: 7, employmentType: "Гибкий график" },
    { id: 8, employmentType: null }, // График не указан
    { id: 9, employmentType: "Стажировка" },
    { id: 10, employmentType: "Удаленная работа" },
  ];

  const cards = cardsData.map((card) => ( // Объявляем переменную cards
    <VacancyCard key={card.id} employmentType={card.employmentType} />
  ));

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {cards.map((card) => ( // Используем cards.map
          <Grid item xs={12} sm={6} md={6} sx={{ maxWidth: '50%' }} key={card.id}> {/* Используем card.id */}
            {card}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
