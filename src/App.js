import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BottomNav from './components/BottomNav/BottomNav';
import { Route, Routes, useLocation } from 'react-router-dom';
import VacancyDetails from './pages/VacancyDetails/VacancyDetails';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      {location.pathname === '/' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy/:id" element={<VacancyDetails />} />
      </Routes>
      <BottomNav />
    </ThemeProvider>
  );
}

export default App;
