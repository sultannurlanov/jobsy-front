import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useScrollDirection } from './useScrollDirection';

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <Box
      sx={{
        position: 'fixed', // Фиксируем Box, а не AppBar
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex', // Flexbox для центрирования
        justifyContent: 'center', // Центрируем по горизонтали
        zIndex: 1000,
        transition: 'transform 0.3s',
        transform: scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <AppBar position="static" sx={{ // position="static" внутри Box
        backgroundColor: '#FFFFFF',
        color: '#000',
        maxWidth: '850px', // Ограничиваем ширину
        width: '100%',
        margin: '0 auto', // Центрируем AppBar внутри Box
      }}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#F98C53' }}>
              JobSy
            </Typography>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
