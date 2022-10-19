import { Chip, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { MUIForm } from './components';

const useStyles = makeStyles()((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const App = () => {
  const { classes } = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Lesson 3
        </Typography>

        <MUIForm />

        <Divider flexItem={true}>
          <Chip label="Сообщения" />
        </Divider>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          laborum illo totam, maxime doloremque optio ipsum voluptates
          explicabo. Optio ut beatae a, officia ratione distinctio accusamus
          dolore iusto ducimus voluptatibus expedita neque fugiat vitae
          similique voluptatum nihil quod sunt? Odio impedit enim harum et
          consequatur inventore cumque officia voluptatum quod?
        </p>
      </div>
    </Container>
  );
};
