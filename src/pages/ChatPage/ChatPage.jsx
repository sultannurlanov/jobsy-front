import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Paper,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

// Импорт кастомных SVG-иконок (положи свои SVG в src/assets/icons/)
import { ReactComponent as PhoneIcon } from "../../assets/icons/PhoneIcon.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/MoreIcon.svg";
import { ReactComponent as SendIconCustom } from "../../assets/icons/SendIconCustom.svg";

export default function ChatPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const user = {
    name: "Асанов Асан",
    lastSeen: "Был в сети: 12 мин назад",
  };
  const vacancy = {
    title: "Уголь ташыганы адам керек something...",
    price: "2000 сом",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Здесь логика отправки сообщения
    setMessage("");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 600 },
        height: "100vh",
        minHeight: "100dvh",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
        boxShadow: { xs: "none", md: "0 0 16px rgba(0,0,0,0.04)" },
      }}
    >
      {/* Верхняя панель */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1,
          py: 1,
          borderBottom: "1px solid #eee",
          minHeight: 56,
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ color: "#222" }}>
          <ArrowBackIcon />
        </IconButton>
        <Box flex={1} sx={{ ml: 1.5 }}>
          <Typography fontWeight="bold" variant="subtitle1">
            {user.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {user.lastSeen}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ p: 1.2 }}>
            <PhoneIcon
              style={{ color: "#757575", width: 24, height: 24 }}
              aria-label="Call"
            />
          </IconButton>
          <IconButton aria-label="More options">
            <MoreIcon
              style={{ color: "#757575", width: 24, height: 24 }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* Карточка вакансии */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        <Avatar
          variant="rounded"
          src={vacancy.image}
          sx={{ width: 56, height: 40, mr: 1 }}
          alt="vacancy"
        />
        <Box flex={1}>
          <Typography noWrap fontWeight={500}>
            {vacancy.title}
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            {vacancy.price}
          </Typography>
        </Box>
      </Box>

      {/* Контент чата (пока пусто) */}
      <Box sx={{ flex: 1, bgcolor: "#fff" }} />

      {/* Поле ввода сообщения */}
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1,
          py: 0.5,
          borderRadius: 0,
          borderTop: "1px solid #eee",
          bgcolor: "#fff",
        }}
        elevation={0}
      >
        <IconButton aria-label="Add attachment">
          <AddIcon sx={{ color: "#BDBDBD" }} />
        </IconButton>
        <InputBase
          value={message}
          onChange={handleChange}
          sx={{
            ml: 1,
            flex: 1,
            bgcolor: "#F5F5F5",
            borderRadius: 2,
            px: 2,
            py: 0.5,
            fontSize: 18,
            "::placeholder": { color: "#BDBDBD", opacity: 1 },
          }}
          placeholder="Напишите сообщение"
          inputProps={{ "aria-label": "Напишите сообщение" }}
        />
        <IconButton
          type="submit"
          disabled={!message.trim()}
          sx={{
            color: message.trim() ? "#F98C53" : "#BDBDBD",
            cursor: message.trim() ? "pointer" : "default",
          }}
          aria-label="Send message"
        >
          <SendIconCustom style={{ width: 28, height: 28 }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
