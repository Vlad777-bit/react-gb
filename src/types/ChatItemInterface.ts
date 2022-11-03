import { MessageItemInterface } from './MessageItemInterface';

export interface ChatItemInterface {
  id: string | number;
  chatName: string;
  messages?: MessageItemInterface[];
}
