import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MyMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
  }
