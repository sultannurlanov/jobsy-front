import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTop: '1px solid #eee',
      }}
    >
      <BottomNavigationAction component={Link} to="/" label="Главная" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/portfolio" label="Портфолио" icon={<BusinessCenterIcon />} />
      <BottomNavigationAction component={Link} to="/chats" label="Чаты" icon={<ChatIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="Профиль" icon={<PersonIcon />} />
      <BottomNavigationAction
        component={Link}
        to="/add"
        label="Добавить"
        icon={<AddCircleIcon />}
        sx={{ color: '#FF9800' }} // Оранжевый цвет
      />
    </BottomNavigation>
  );
}
