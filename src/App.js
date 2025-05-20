import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BottomNav from './components/BottomNav/BottomNav';
import VacancyDetails from './pages/VacancyDetails/VacancyDetails';
import ChatPage from './pages/ChatPage/ChatPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ChatListPage from './pages/ChatListPage';

function App() {
  const location = useLocation();

  const isVacancyPage = location.pathname.startsWith('/vacancy/');
  const isChatPage = location.pathname.startsWith('/chats/'); // учитываем только /chats/

  return (
    <ThemeProvider theme={theme}>
      {location.pathname === '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy/:id" element={<VacancyDetails />} />
        <Route path="/chats" element={<ChatListPage />} />
        <Route path="/chats/:chatId" element={<ChatPage />} />
      </Routes>

      {!isVacancyPage && !isChatPage && <BottomNav />}
    </ThemeProvider>
  );
}

export default App;
