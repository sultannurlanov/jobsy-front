import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Container
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  ArrowBack
} from '@mui/icons-material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // API logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 0,
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 2, mt: 2, display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ mr: 1, p: 0.5 }} onClick={() => navigate(-1)}>
            <ArrowBack sx={{ fontSize: 22 }} />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#222' }}>
            Регистрация
          </Typography>
        </Box>

        {/* Subtitle */}
        <Typography
          variant="body2"
          sx={{
            color: '#222',
            mb: 3,
            fontSize: '15px',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          Создайте аккаунт за минуту и начните пользоваться
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Имя"
            placeholder="Введите ваше имя"
            value={formData.firstName}
            onChange={handleInputChange('firstName')}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                background: '#fff',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#BDBDBD',
                opacity: 1,
                fontWeight: 400,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
            InputLabelProps={{
              sx: { fontWeight: 500, color: '#222' }
            }}
          />

          <TextField
            fullWidth
            label="Фамилия"
            placeholder="Введите ваше имя"
            value={formData.lastName}
            onChange={handleInputChange('lastName')}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                background: '#fff',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#BDBDBD',
                opacity: 1,
                fontWeight: 400,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
            InputLabelProps={{
              sx: { fontWeight: 500, color: '#222' }
            }}
          />

          <TextField
            fullWidth
            label="Телефон"
            placeholder="+996"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                background: '#fff',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#BDBDBD',
                opacity: 1,
                fontWeight: 400,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
            InputLabelProps={{
              sx: { fontWeight: 500, color: '#222' }
            }}
            inputProps={{ inputMode: 'tel' }}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="Пароль"
            placeholder="Придумайте пароль"
            value={formData.password}
            onChange={handleInputChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size="small"
                    sx={{ color: '#BDBDBD' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                background: '#fff',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#BDBDBD',
                opacity: 1,
                fontWeight: 400,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
            InputLabelProps={{
              sx: { fontWeight: 500, color: '#222' }
            }}
          />

          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            label="Подтвердить пароль"
            placeholder="Повторите пароль"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    size="small"
                    sx={{ color: '#BDBDBD' }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                background: '#fff',
              },
              '& .MuiInputBase-input::placeholder': {
                color: '#BDBDBD',
                opacity: 1,
                fontWeight: 400,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E0E0E0',
              },
            }}
            InputLabelProps={{
              sx: { fontWeight: 500, color: '#222' }
            }}
          />

          <Typography
            variant="caption"
            sx={{
              color: '#666',
              display: 'block',
              mb: 3,
              mt: 1,
              fontSize: 13,
            }}
          >
            Нажимая «Далее», вы соглашаетесь с нашей{' '}
            <Link href="#" sx={{ color: '#1976d2', fontSize: '13px', fontWeight: 400 }}>
              Политикой конфиденциальности
            </Link>
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#FF6B35',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: '12px',
              py: 1.7,
              mb: 2,
              textTransform: 'none',
              boxShadow: 'none',
              letterSpacing: 0,
              '&:hover': {
                backgroundColor: '#FF6B35',
                opacity: 0.95,
              },
            }}
          >
            Далее
          </Button>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="body2" sx={{ color: '#666', fontSize: 15 }}>
              У вас уже есть аккаунт?{' '}
              <Link
                component={RouterLink}
                to="/login"
                sx={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}
              >
                Войти
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
