import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BottomNav from './components/BottomNav/BottomNav';
import VacancyDetails from './pages/VacancyDetails/VacancyDetails';
import ChatPage from './pages/ChatPage/ChatPage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ChatListPage from './pages/ChatListPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthRequiredModal from './components/AuthRequiredModal';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const isVacancyPage = location.pathname.startsWith('/vacancy/');
  const isChatPage = location.pathname.startsWith('/chats/');

  // Функция для проверки авторизации и открытия модалки
  const requireAuth = () => {
    if (!isAuth) {
      setAuthModalOpen(true);
      return false;
    }
    return true;
  };

  // Функция для навигации с проверкой авторизации (для BottomNav)
  const handleNavClick = (path, requiresAuth = false) => {
    if (requiresAuth && !isAuth) {
      setAuthModalOpen(true);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {location.pathname === '/' && <Header />}

        <Routes>
          <Route path="/" element={<Home requireAuth={requireAuth} />} />
          <Route path="/vacancy/:id" element={<VacancyDetails />} />
          <Route path="/chats" element={<ChatListPage />} />
          <Route path="/chats/:chatId" element={<ChatPage />} />
        </Routes>

        {!isVacancyPage && !isChatPage && <BottomNav onNavClick={handleNavClick} />}

        <AuthRequiredModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      </ThemeProvider>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
