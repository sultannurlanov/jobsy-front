import React from 'react';
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import { Grid, Container, Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Home.css'; // Import the CSS file

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const containerMaxWidth = 768;

  const computeRight = () => {
    if (typeof window === "undefined") return 20;
    const vw = window.innerWidth;
    if (vw > containerMaxWidth) {
      return ((vw - containerMaxWidth) / 2) + 20;
    }
    return 20;
  };

  const [right, setRight] = React.useState(computeRight());

  React.useEffect(() => {
    const handleResize = () => setRight(computeRight());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsData = [
    { id: 1, employmentType: "Сегодня с 10:00 до 12:00", color: '#E8F5E9', textColor: '#43A047' },
    { id: 2, employmentType: "Долгосрочная работа", color: '#EDE7F6', textColor: '#673AB7' },
    { id: 3, employmentType: null, color: '#EEEEEE', textColor: '#757575' },
    { id: 4, employmentType: "Полный день", color: '#E8F5E9', textColor: '#43A047' },
    { id: 5, employmentType: null, color: '#EEEEEE', textColor: '#757575' },
    { id: 6, employmentType: "Сегодня с 14:00 до 18:00", color: '#E8F5E9', textColor: '#43A047' },
    { id: 7, employmentType: "Гибкий график", color: '#EDE7F6', textColor: '#673AB7' },
    { id: 8, employmentType: null, color: '#EEEEEE', textColor: '#757575' },
    { id: 9, employmentType: "Стажировка", color: '#E8F5E9', textColor: '#43A047' },
    { id: 10, employmentType: "Удаленная работа", color: '#EDE7F6', textColor: '#673AB7' },
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ mt: 2, pb: 12 }}>
        <Grid container spacing={2} className="card-container">
          {cardsData.map((card) => (
            <Grid item xs={12} sm={6} key={card.id}>
              <VacancyCard employmentType={card.employmentType} color={card.color} textColor={card.textColor} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          position: 'fixed',
          bottom: isMobile ? 80 : 100,
          right: right,
          zIndex: 1300,
          background: '#F98C53',
          borderRadius: '24px',
          fontWeight: 500,
          fontSize: '16px',
          minWidth: '140px',
          boxShadow: '0px 2px 10px rgba(249,140,83,0.20)',
          '&:hover': { background: '#F98C53' },
          textTransform: 'none',
          color: '#fff',
          transition: 'right 0.2s',
        }}
      >
        Добавить
      </Button>
      <BottomNav />
    </Box>
  );
}
