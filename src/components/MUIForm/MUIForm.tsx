import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { FC, useRef, useState } from 'react';
import { MUIFormProps } from './MUIForm.props';
import { makeStyles } from 'tss-react/mui';
import SendIcon from '@mui/icons-material/Send';
import { MessageItemInterface } from '../../types/MessageItemInterface';
import { format } from 'date-fns';

const useStyles = makeStyles()((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface State {
  userName: string;
  body: string;
}

export const MUIForm: FC<MUIFormProps> = ({ addNewMessage }) => {
  const { classes } = useStyles();

  const [inputValues, setInputValues] = useState<State>({
    userName: '',
    body: '',
  });

  const userNameRef = useRef<HTMLInputElement>(null);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({ ...inputValues, [prop]: event.target.value });
    };

  const createNewMessage = (): MessageItemInterface | undefined => {
    const newMessage: MessageItemInterface = {
      ...inputValues,
      id: Date.now().toString(),
      createdAt: format(new Date(), 'HH:mm'),
    };

    if (!(inputValues.userName && inputValues.body)) {
      return;
    }

    addNewMessage(newMessage);
    setInputValues({ userName: '', body: '' });

    if (userNameRef.current) {
      userNameRef.current?.focus();
    }

    return newMessage;
  };

  const handleClickToSendMessage = () => {
    createNewMessage();
  };

  const handleKeyDownToSendMessage = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code !== 'Enter') {
      return;
    }

    createNewMessage();
  };

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="userName"
        label="Введите ваше имя"
        placeholder="Вася"
        name="userName"
        autoComplete="userName"
        value={inputValues.userName}
        onChange={handleChange('userName')}
        inputRef={userNameRef}
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="userMessage">Написать сообщение...</InputLabel>
        <OutlinedInput
          id="userMessage"
          type="text"
          value={inputValues.body}
          onChange={handleChange('body')}
          onKeyDown={handleKeyDownToSendMessage}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickToSendMessage}
                edge="end"
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Написать сообщение..."
        />
      </FormControl>
    </form>
  );
};
