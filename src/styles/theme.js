import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9800', // Оранжевый цвет
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: '16px',
          borderColor: '#FF9800',
          color: '#FF9800',
          '&:hover': {
            backgroundColor: '#FFF2E5',
          },
        },
      },
    },
  },
});

export default theme;
