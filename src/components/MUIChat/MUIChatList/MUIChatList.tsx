import { List } from '@mui/material';
import { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { MUIChatItem } from '../MUIChatItem/MUIChatItem';
import { MUIChatsListProps } from './MUIChatList.props';

const useStyles = makeStyles()((theme) => ({
  userChatList: {
    width: '100%',
    maxHeight: 'calc(100vh - 30px)',
    overflow: 'scroll',

    backgroundColor: 'lightgray',
    borderRadius: '15px',
    padding: '15px',
  },
}));

export const MUIChatList: FC<MUIChatsListProps> = ({ chatList }) => {
  const { classes } = useStyles();

  return (
    <List className={classes.userChatList}>
      {chatList.map((chat) => (
        <MUIChatItem key={chat.id} chatData={chat} />
      ))}
    </List>
  );
};
