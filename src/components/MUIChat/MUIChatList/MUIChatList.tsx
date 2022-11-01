import { List } from '@mui/material';
import { FC } from 'react';
import { MUIChatItem } from '../MUIChatItem/MUIChatItem';
import { MUIChatsListProps } from './MUIChatList.props';

export const MUIChatList: FC<MUIChatsListProps> = ({ chatList }) => {
  return (
    <List>
      {chatList.map((chat) => (
        <MUIChatItem key={chat.id} chatData={chat} />
      ))}
    </List>
  );
};
