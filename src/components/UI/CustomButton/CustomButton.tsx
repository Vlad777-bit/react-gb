import React, { FC } from 'react';
import { CustomButtonProps } from './CustomButton.props';

export const CustomButton: FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  );
};
