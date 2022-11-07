import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MessageInterface } from '../../../types/MessageInterface';

export interface MessageItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  msg: MessageInterface;
}
