import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AuthRequiredModal({ open, onClose }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    onClose();
    navigate('/register');
  };

  const handleLogin = () => {
    onClose();
    navigate('/login');
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 22, mt: 1 }}>
        Требуется авторизация
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ mb: 3 }}>
          Чтобы продолжить, пожалуйста, войдите в аккаунт или зарегистрируйтесь.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#F98C53',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 2,
              py: 1.2,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#e07b3d' },
            }}
            onClick={handleRegister}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#F98C53',
              borderColor: '#F98C53',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 2,
              py: 1.2,
              '&:hover': { borderColor: '#e07b3d', color: '#e07b3d' },
            }}
            onClick={handleLogin}
          >
            Войти
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
