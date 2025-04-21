import React from 'react';
import { Container, Typography } from '@mui/material';

export default function VacancyDetails() {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Подробное описание вакансии
      </Typography>
      <Typography variant="body1">
        Здесь будет подробное описание вакансии.
      </Typography>
    </Container>
  );
}
