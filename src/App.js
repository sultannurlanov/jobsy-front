import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BottomNav from './components/BottomNav/BottomNav';
import VacancyDetails from './pages/VacancyDetails/VacancyDetails';
import ChatPage from './pages/ChatPage/ChatPage';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Проверяем, находится ли пользователь на странице вакансии или чата
  const isVacancyPage = location.pathname.startsWith('/vacancy/');
  const isChatPage = location.pathname.startsWith('/chat/');

  return (
    <ThemeProvider theme={theme}>
      {/* Показываем Header только на главной странице */}
      {location.pathname === '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy/:id" element={<VacancyDetails />} />
        <Route path="/chat/:userId" element={<ChatPage />} />
      </Routes>
      
      {/* Показываем BottomNav только если НЕ на странице вакансии и НЕ на странице чата */}
      {!isVacancyPage && !isChatPage && <BottomNav />}
    </ThemeProvider>
  );
}

export default App;
