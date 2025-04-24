import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

// Импорты SVG:
import HomeIcon from '../../assets/icons/HomeIcon.svg';
import PortfolioIcon from '../../assets/icons/PortfolioIcon.svg';
import ChatIcon from '../../assets/icons/ChatIcon.svg';
import ProfileIcon from '../../assets/icons/ProfileIcon.svg';

export default function BottomNav() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        // display: 'flex', // Убираем Flexbox
        // justifyContent: 'center', // Убираем Flexbox
        zIndex: 1200,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          showLabels
          sx={{
            borderTop: '1px solid #eee',
            justifyContent: 'space-around', // Равномерное распределение иконок
          }}
        >
          <BottomNavigationAction
            label="Главная"
            value="/"
            component={Link}
            to="/"
            sx={{ "& .MuiBottomNavigationAction-label": { display: "none" } }}
            icon={<img src={HomeIcon} alt="Главная" style={{ width: 50, height: 50 }} />}
          />
          <BottomNavigationAction
            label="Портфолио"
            value="/portfolio"
            component={Link}
            to="/portfolio"
            sx={{ "& .MuiBottomNavigationAction-label": { display: "none" } }}
            icon={<img src={PortfolioIcon} alt="Портфолио" style={{ width: 70, height: 70 }} />}
          />
          <BottomNavigationAction
            label="Чаты"
            value="/chats"
            component={Link}
            to="/chats"
            sx={{ "& .MuiBottomNavigationAction-label": { display: "none" } }}
            icon={<img src={ChatIcon} alt="Чаты" style={{ width: 50, height: 50 }} />}
          />
          <BottomNavigationAction
            label="Профиль"
            value="/profile"
            component={Link}
            to="/profile"
            sx={{ "& .MuiBottomNavigationAction-label": { display: "none" } }}
            icon={<img src={ProfileIcon} alt="Профиль" style={{ width: 50, height: 50 }} />}
          />
        </BottomNavigation>
      </Container>
    </div>
  );
}
