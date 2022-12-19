import { FC } from 'react';
import { HumburgerProps } from './Humburger.props';
import classes from './Humburger.module.scss';
import cn from 'classnames';

export const MyHumburger: FC<HumburgerProps> = ({ isOpen, setIsOpen }) => {
  const { humburger, humburger_active, humburger_items } = classes;

  const handleClickMenu = () => {
    setIsOpen();
  };

  return (
    <div
      className={cn(humburger, {
        [humburger_active]: isOpen,
      })}
    >
      <div className={humburger_items} onClick={handleClickMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
