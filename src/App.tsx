import { Container } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Menu, MUIChatList, MyHumburger, RouteComponent } from './components';
import { useAppSelector } from './hooks/useTypedRedux';

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

  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAppSelector((state) => state.profileReducer);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return isAuth ? (
    <>
      <Container component="main" maxWidth="lg" className={classes.container}>
        <div className={classes.menu}>
          <Menu isOpen={isOpen} />
          <MyHumburger isOpen={isOpen} setIsOpen={openMenu} />

          <MUIChatList />
        </div>
        <RouteComponent />
      </Container>
    </>
  ) : (
    <RouteComponent />
  );
};
