import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTop: '1px solid #ECECEC',
        maxWidth: '820px',
        margin: '0 auto',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          flex: 1,
          '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 'none',
            flex: 1,
            color: '#888',
          },
          '& .Mui-selected': {
            color: '#F98C53',
          },
        }}
        showLabels
      >
        <BottomNavigationAction label="Главная" icon={<HomeIcon />} />
        <BottomNavigationAction label="Портфолио" icon={<WorkOutlineIcon />} />
        <BottomNavigationAction label="Чаты" icon={<ChatBubbleOutlineIcon />} />
        <BottomNavigationAction label="Профиль" icon={<PersonOutlineIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
