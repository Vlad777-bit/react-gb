import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../store/Profile/slice';
import { SignInProps } from './SignIn.props';

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
    <div>
      <h2>SignIn</h2>

      <form onSubmit={handleSubmit}>
        {isError && (
          <div style={{ color: 'red' }}>Неверно введён логин/пароль</div>
        )}
        <label>
          Логин:
          <input
            type="text"
            name="login"
            value={value.login}
            onChange={handleChange}
          />
        </label>

        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
