import { Container } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { MUIChatList, MUIForm } from './components';
import { MUIMessageList } from './components/MUIMessage';
import { ChatItemInterface } from './types/ChatItemInterface';
import { MessageItemInterface } from './types/MessageItemInterface';

const useStyles = makeStyles()((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
  },
  wrapper: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
}));

export const App = () => {
  const { classes } = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chatList, setChatList] = useState<ChatItemInterface[]>([
    { id: '1', chatName: '<VoFront />' },
    { id: '2', chatName: 'GB_PHP' },
    { id: '3', chatName: 'VK Мusic BOX Iphone' },
    { id: '4', chatName: 'Open Source' },
  ]);

  const [messageList, setMessageList] = useState<MessageItemInterface[]>([]);

  const addNewMessage = (newMessage: MessageItemInterface) => {
    setMessageList([...messageList, newMessage]);
  };

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <MUIChatList chatList={chatList} />
      <div className={classes.wrapper}>
        <MUIMessageList messageList={messageList} />

        <MUIForm addNewMessage={addNewMessage} />
      </div>
    </Container>
  );
};
