import { List } from '@mui/material';
import { FC } from 'react';
import { MUIMessageItem } from '../MUIMessageItem/MUIMessageItem';
import { MUIMessageListProps } from './MUIMessageList.props';

export const MUIMessageList: FC<MUIMessageListProps> = ({ messageList }) => {
  return (
    <List>
      {messageList.map((msg) => (
        <MUIMessageItem key={msg.id} messageData={msg} />
      ))}
    </List>
  );
};
