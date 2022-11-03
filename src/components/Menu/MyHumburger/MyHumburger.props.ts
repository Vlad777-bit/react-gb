import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MyHumburgerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
    setIsOpen: () => void;
  }
