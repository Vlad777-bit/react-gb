import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../store/Profile/slice';
import { SignInProps } from './SignIn.props';
import classes from './SignIn.module.scss';

interface SignInState {
  login: string;
  password: string;
}

export const SignIn: FC<SignInProps> = () => {
  const [value, setValue] = useState<SignInState>({
    login: '',
    password: '',
  });

  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.login === 'login' && value.password === 'pass') {
      dispatch(auth(true));
      navigate('/chats', { replace: true });
    } else {
      setValue({ login: '', password: '' });
      setIsError(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit}>
        {isError && (
          <div style={{ color: 'red' }}>Неверно введён логин/пароль</div>
        )}
        <label>
          <input
            type="text"
            name="login"
            placeholder="Логин"
            value={value.login}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={value.password}
            onChange={handleChange}
          />
        </label>

        <Link to="/register">Регистрация</Link>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
