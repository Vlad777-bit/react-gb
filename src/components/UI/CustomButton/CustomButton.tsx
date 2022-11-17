import { FC } from 'react';
import { CustomButtonProps } from './CustomButton.props';
import classes from './CustomButton.module.scss';
import cn from 'classnames';

export const CustomButton: FC<CustomButtonProps> = ({ children, ...props }) => {
  const { button } = classes;

  return (
    <button {...props} className={cn(button, props.className)}>
      {children}
    </button>
  );
};
