import { FC, useState } from 'react';
import { MUIForm, MUIMessageList } from '../../components';
import { MessageItemInterface } from '../../types/MessageItemInterface';
import { ChatIdProps } from './ChatId.props';
import classes from './ChatId.module.scss';

export const ChatId: FC<ChatIdProps> = () => {
  const { wrapper } = classes;

  const [messageList, setMessageList] = useState<MessageItemInterface[]>([]);

  const addNewMessage = (newMessage: MessageItemInterface) => {
    setMessageList([...messageList, newMessage]);
  };

  return (
    <div className={wrapper}>
      <MUIMessageList messageList={messageList} />
      <MUIForm addNewMessage={addNewMessage} />
    </div>
  );
};
