import { MessageItemInterface } from './MessageItemInterface';

export interface ChatItemInterface {
  id: string;
  chatName: string;
  messages: MessageItemInterface[];
}
