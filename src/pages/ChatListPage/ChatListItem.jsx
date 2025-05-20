import React from 'react';
import { Avatar, Badge } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ChatListItem({ id,name, avatar, lastMessage, date, unread }) {
  return (
    <Link to={`/chats/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      borderBottom: '1px solid #F2F2F2',
      background: '#fff',
      cursor: 'pointer',
      minWidth: 0,
      boxSizing: 'border-box',
      width: '100%',
    }}>
      <Avatar
        src={avatar}
        alt={name}
        sx={{
          width: 40,
          height: 40,
          mr: 2,
          bgcolor: '#E0E0E0',
          color: '#828282',
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        {!avatar && name[0]}
      </Avatar>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 16, color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {name}
        </div>
        <div style={{
          color: '#828282',
          fontSize: 14,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
        }}>
          {lastMessage}
        </div>
      </div>
      <div style={{ textAlign: 'right', minWidth: 48, flexShrink: 0 }}>
        <div style={{ color: '#BDBDBD', fontSize: 13, marginBottom: 3 }}>{date}</div>
        {unread > 0 && (
          <Badge
            badgeContent={unread > 10 ? '10+' : unread}
            color="warning"
            sx={{
              '& .MuiBadge-badge': {
                
                top: 4,
                fontSize: 12,
                fontWeight: 700,
                minWidth: 35,
                height: 22,
                borderRadius: 11,
                background: '#FF9100',
                color: '#fff'
              }
            }}
          >
            <span></span>
          </Badge>
        )}
      </div>
    </div>
    </Link>
  );
}
