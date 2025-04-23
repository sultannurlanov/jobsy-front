import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#FFFFFF', 
      color: '#000',
      width: '100%', // Занимает всю ширину родителя
      maxWidth: '850px', // Ограничиваем ширину на больших экранах (md = 768px)
      margin: '0 auto', // Центрируем
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
  );
}
