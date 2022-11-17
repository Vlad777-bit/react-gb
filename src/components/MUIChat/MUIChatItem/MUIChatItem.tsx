import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { MUIChatItemProps } from './MUIChatItem.props';

export const MUIChatItem: FC<MUIChatItemProps> = ({ chatData }) => {
  const { chatName, messages } = chatData;

  const trimLongString = (
    text: string | undefined,
    lengthStr: number
  ): string => {
    if (!text) {
      return '';
    }

    return text.length > lengthStr
      ? text.slice(0, lengthStr).concat('...')
      : text;
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
              {trimLongString(messages ? messages?.at(-1)?.userName : '', 10)}
            </Typography>{' '}
            {trimLongString(messages ? messages?.at(-1)?.body : '', 12)}
          </>
        }
      />
    </ListItem>
  );
};
