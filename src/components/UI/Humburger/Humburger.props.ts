import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HumburgerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
    setIsOpen: () => void;
  }
