import { Button, TextField } from '@mui/material';
import { FC } from 'react';
import { MUIFormProps } from './MUIForm.props';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const MUIForm: FC<MUIFormProps> = () => {
  const { classes } = useStyles();

  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="userName"
        label="Введите ваше имя"
        placeholder="Имя"
        name="userName"
        autoComplete="userName"
      />
      <TextField
        id="userMessage"
        name="userMessage"
        fullWidth
        autoComplete="userMessage"
        label="Введите ваше сообщение"
        placeholder="Сообщение"
        multiline
        rows="5"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Отправить
      </Button>
    </form>
  );
};
