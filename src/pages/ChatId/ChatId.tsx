import { FC } from 'react';
import { MUIForm, MUIMessageList } from '../../components';
import { MessageItemInterface } from '../../types/MessageItemInterface';
import { ChatIdProps } from './ChatId.props';
import classes from './ChatId.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedRedux';
import { addNewMessageToChat } from '../../store/Chats/slice';
import { useParams } from 'react-router-dom';

export const ChatId: FC<ChatIdProps> = () => {
  const { wrapper } = classes;

  const { chats } = useAppSelector((state) => state.chatsReducer);
  const dispatch = useAppDispatch();
  const { id: chatId = '' } = useParams();

  const addNewMessage = (message: MessageItemInterface) => {
    dispatch(addNewMessageToChat({ chatId, message }));
  };

  return (
    <div className={wrapper}>
      {chats.map(
        (chat) =>
          chatId === chat.id && (
            <MUIMessageList
              key={chat.id}
              messageList={chat.messages}
            />
          )
      )}
      <MUIForm addNewMessage={addNewMessage} />
    </div>
  );
};
