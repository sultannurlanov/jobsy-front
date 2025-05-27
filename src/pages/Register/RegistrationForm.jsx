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
import { ReactComponent as BackArrowIcon } from '../../assets/icons/BackArrowIcon.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+996',
    password: '',
    confirmPassword: '',
    email: '',       // email не обязателен
    address: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Маска телефона — не даём удалить +996
  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('+996')) {
      val = '+996' + val.replace(/[^0-9]/g, '').replace(/^996/, '');
    }
    if (val.length > 13) val = val.slice(0, 13);
    setFormData({ ...formData, phone: val });
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Валидация (email не обязателен!)
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Пожалуйста, заполните все обязательные поля.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают.');
      return;
    }

    setLoading(true);

    // Формируем тело запроса
    const payload = {
      username: formData.firstName,
      password: formData.password,
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email, // Можно отправлять пустую строку
      phone: formData.phone.replace('+', ''),
      description: "jobsy",
      address: formData.address,
      dateCreated: new Date().toISOString(),
      active: true
    };

    try {
      const response = await fetch('http://20.102.88.189/api/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Регистрация прошла успешно!');
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Не удалось создать аккаунт');
      }
    } catch (err) {
      setError('Ошибка сети: ' + err.message);
    } finally {
      setLoading(false);
    }
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
        disableGutters
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          px: { xs: 2, sm: 0 },
          width: { xs: '100vw', sm: 'auto' },
          minWidth: 0,
        }}
      >
        {/* Кнопка назад */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: 2, mb: 3 }}>
          <IconButton
            sx={{ p: 0.5 }}
            onClick={() => navigate(-1)}
            aria-label="Назад"
          >
            <BackArrowIcon style={{ width: 22, height: 22 }} />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#222',
            mb: 1,
            fontSize: 22,
            lineHeight: 1.2,
          }}
        >
          Регистрация
        </Typography>

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

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          {/* Имя */}
          <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 15, mb: 0.5 }}>
            Имя
          </Typography>
          <TextField
            fullWidth
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
            InputLabelProps={{ shrink: false }}
          />

          {/* Фамилия */}
          <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 15, mb: 0.5 }}>
            Фамилия
          </Typography>
          <TextField
            fullWidth
            placeholder="Введите вашу фамилию"
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
            InputLabelProps={{ shrink: false }}
          />

          {/* Телефон */}
          <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 15, mb: 0.5 }}>
            Телефон
          </Typography>
          <TextField
            fullWidth
            placeholder="+996"
            value={formData.phone}
            onChange={handlePhoneChange}
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
            InputLabelProps={{ shrink: false }}
            inputProps={{
              inputMode: 'tel',
              maxLength: 13,
            }}
          />

          {/* Email (необязательное поле) */}
          <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 15, mb: 0.5 }}>
            Email <span style={{ color: '#BDBDBD', fontWeight: 400 }}>(необязательно)</span>
          </Typography>
          <TextField
            fullWidth
            placeholder="Введите ваш email"
            value={formData.email}
            onChange={handleInputChange('email')}
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
            InputLabelProps={{ shrink: false }}
            type="email"
          />

          {/* Пароль */}
          <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 15, mb: 0.5 }}>
            Пароль
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
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
            InputLabelProps={{ shrink: false }}
          />

          {/* Подтвердить пароль */}
          <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 15, mb: 0.5 }}>
            Подтвердить пароль
          </Typography>
          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
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
            InputLabelProps={{ shrink: false }}
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
            disabled={loading}
            sx={{
              backgroundColor: '#FF6B35',
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              borderRadius: '12px',
              py: 1.5,
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
