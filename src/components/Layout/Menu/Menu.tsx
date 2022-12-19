import { FC } from 'react';
import { MenuProps } from './Menu.props';
import classes from './Menu.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Menu: FC<MenuProps> = ({ isOpen }) => {
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
        <li className={menu__item}>
          <Link to="/photos">Фотографии</Link>
        </li>
        <li className={menu__item}>
          <Link to="/signin">Войти</Link>
        </li>
      </ul>
    </div>
  );
};
