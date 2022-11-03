import { Container } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { MUIChatList, RouteComponent } from './components';
import { MyHumburger } from './components/Menu/MyHumburger/MyHumburger';
import { ChatItemInterface } from './types/ChatItemInterface';
import { MyMenu } from './components/Menu';
import { format } from 'date-fns';

const useStyles = makeStyles()((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    padding: '15px',
  },

  menu: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '50px 1fr',
  },
}));

export const App = () => {
  const { classes } = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chatList, setChatList] = useState<ChatItemInterface[]>([
    {
      id: '1',
      chatName: '<VoFront />',
      messages: [
        {
          id: '1',
          body: 'Привет всем!',
          userName: 'Пользователь',
          createdAt: format(new Date(), 'HH:mm'),
        },
        {
          id: '2',
          body: 'Hi!',
          userName: 'Другой пользователь',
          createdAt: format(new Date(), 'HH:mm'),
        },
      ],
    },
    { id: '2', chatName: 'GB_PHP' },
    { id: '3', chatName: 'VK Мusic BOX Iphone' },
    { id: '4', chatName: 'Open Source' },
  ]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Container component="main" maxWidth="lg" className={classes.container}>
        <div className={classes.menu}>
          <MyMenu isOpen={isOpen} />
          <MyHumburger isOpen={isOpen} setIsOpen={openMenu} />

          <MUIChatList chatList={chatList} />
        </div>
        <RouteComponent />
      </Container>
    </>
  );
};
