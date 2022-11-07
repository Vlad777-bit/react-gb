import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MessageInterface } from '../../../types/MessageInterface';

export interface MessagesListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  messageList: MessageInterface[];
}
