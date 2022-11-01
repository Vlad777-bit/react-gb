import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { MUIChatItemProps } from './MUIChatItem.props';

export const MUIChatItem: FC<MUIChatItemProps> = ({ chatData }) => {
  const { chatName } = chatData;

  const msg = 'Всем привет! Как дела?';

  const sliceMessage = (msg: string, lengthMsg: number): string => {
    return msg.length > lengthMsg ? msg.slice(0, lengthMsg).concat('...') : msg;
  };

  return (
    <ListItem disablePadding>
      <ListItemAvatar>
        <Avatar alt="картинка чата" />
      </ListItemAvatar>
      <ListItemText
        primary={chatName}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Пользователь
            </Typography>{' '}
            - {sliceMessage(msg, 12)}
          </>
        }
      />
    </ListItem>
  );
};
