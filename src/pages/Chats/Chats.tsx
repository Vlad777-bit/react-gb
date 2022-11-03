import { FC } from 'react';
import { ChatsProps } from './Chats.props';
import classes from './Chats.module.scss';

export const Chats: FC<ChatsProps> = () => {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      <h2>Выберете, кому хотели бы написать</h2>
    </div>
  );
};
