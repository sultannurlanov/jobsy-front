import React from 'react';
import { Container } from '@mui/material';
import ChatListItem from './ChatListItem';

// Пример данных (объяви вне JSX!)
const chats = [
  {
    id: 1,
    name: 'Ыкыбал',
    avatar: null,
    lastMessage: 'Саламатсызбы, егер иш боюнча кыз...',
    date: '22.04.25',
    unread: 15,
  },
  {
    id: 2,
    name: 'Даниэль',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'Здравствуйте, на завтра нам нужны 2...',
    date: '23.04.25',
    unread: 2,
  },
  {
    id: 3,
    name: 'Айжан',
    avatar: null,
    lastMessage: 'Саламатсызбы, услугаңыз керек',
    date: '01.01.25',
    unread: 0,
  },
];

export default function ChatListPage() {
  return (
    <Container
      maxWidth="sm"
      disableGutters
      sx={{
        px: 1, // горизонтальные отступы (theme.spacing(2) = 16px)
        pt: 2, // верхний отступ (theme.spacing(2) = 16px)
        bgcolor: '#fff',
        minHeight: '100vh',
      }}
    >
      <h2 style={{ margin: '0 0 8px 0', fontWeight: 700, fontSize: 20 }}>Чаты</h2>
      <div>
        {chats.map(chat => (
          <ChatListItem key={chat.id} {...chat} />
        ))}
      </div>
    </Container>
  );
}
