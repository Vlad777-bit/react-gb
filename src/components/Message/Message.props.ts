import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MessageProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
    msg: string;
  }
