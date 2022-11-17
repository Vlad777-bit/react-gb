import { MessageItemInterface } from './MessageItemInterface';

export interface AddMessageToChat {
  chatId: string;
  message: MessageItemInterface;
}
