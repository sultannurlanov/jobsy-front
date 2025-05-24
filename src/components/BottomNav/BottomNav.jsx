import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/HomeIcon.svg';
import { ReactComponent as PortfolioIcon } from '../../assets/icons/PortfolioIcon.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/ChatIcon.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/ProfileIcon.svg';

const navItems = [
  {
    label: 'Главная',
    value: '/',
    icon: HomeIcon,
    iconStyle: { width: 50, height: 50 },
    requiresAuth: false,
  },
  {
    label: 'Портфолио',
    value: '/portfolio',
    icon: PortfolioIcon,
    iconStyle: { width: 70, height: 50 },
    requiresAuth: true,
  },
  {
    label: 'Чаты',
    value: '/chats',
    icon: ChatIcon,
    iconStyle: { width: 50, height: 50 },
    requiresAuth: true,
  },
  {
    label: 'Профиль',
    value: '/profile',
    icon: ProfileIcon,
    iconStyle: { width: 50, height: 50 },
    requiresAuth: true,
  },
];

export default function BottomNav({ onNavClick }) {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const navigate = useNavigate();

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const navItem = navItems.find((item) => item.value === newValue);
    if (!navItem) return;

    if (navItem.requiresAuth) {
      // Call parent's handler to check auth and open modal if needed
      onNavClick(newValue, true);
    } else {
      // Navigate directly for public routes
      navigate(newValue);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1200,
      }}
    >
      <Container maxWidth="md" sx={{ bgcolor: 'background.paper' }}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels={false} // labels inside SVG icons
          sx={{
            borderTop: '1px solid #eee',
            justifyContent: 'space-around',
          }}
        >
          {navItems.map(({ label, value: val, icon: Icon, iconStyle }) => {
            const isActive = value === val;
            return (
              <BottomNavigationAction
                key={val}
                value={val}
                sx={{
                  p: 0,
                  minWidth: 0,
                  maxWidth: 90,
                }}
                icon={
                  <Icon
                    style={{
                      ...iconStyle,
                      color: isActive ? '#111' : '#BDBDBD',
                      display: 'block',
                      margin: '0 auto',
                      transition: 'color 0.2s',
                    }}
                  />
                }
                aria-label={label}
              />
            );
          })}
        </BottomNavigation>
      </Container>
    </div>
  );
}
