import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { MUIMessageItemProps } from './MUIMessageItem.props';

export const MUIMessageItem: FC<MUIMessageItemProps> = ({ messageData }) => {
  const { userName, body, createdAt } = messageData;

  return (
    <ListItem disablePadding>
      <ListItemAvatar>
        <Avatar alt={userName} />
      </ListItemAvatar>
      <ListItemText
        primary={userName}
        secondary={
          <>
            <Typography component="span" variant="body1" color="text.primary">
              {body}
            </Typography>{' '}
            <Typography component="time" variant="body2" color="blue">
              {createdAt}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};
