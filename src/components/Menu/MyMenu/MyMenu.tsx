import { FC } from 'react';
import { MyMenuProps } from './MyMenu.props';
import classes from './MyMenu.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const MyMenu: FC<MyMenuProps> = ({ isOpen }) => {
  const { menu, menu__list, menu__item, active } = classes;
  return (
    <div
      className={cn(menu, {
        [active]: isOpen,
      })}
    >
      <ul className={menu__list}>
        <li className={menu__item}>
          <Link to="/">Главная</Link>
        </li>
        <li className={menu__item}>
          <Link to="/chats">Чаты</Link>
        </li>
        <li className={menu__item}>
          <Link to="/profile">Профиль</Link>
        </li>
      </ul>
    </div>
  );
};
