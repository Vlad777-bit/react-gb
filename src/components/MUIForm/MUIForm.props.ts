import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MessageItemInterface } from '../../types/MessageItemInterface';

export interface MUIFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    addNewMessage: (newMessage: MessageItemInterface) => void;
}
