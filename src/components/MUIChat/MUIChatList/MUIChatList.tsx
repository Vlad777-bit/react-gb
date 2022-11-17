import { List } from '@mui/material';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './MUIChatList.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedRedux';
import { addNewChat, removeChat } from '../../../store/Chats/slice';
import { ChatItemInterface } from '../../../types/ChatItemInterface';
import { CustomButton } from '../../UI';
import { MUIChatItem } from '../MUIChatItem/MUIChatItem';
import { MUIChatsListProps } from './MUIChatList.props';

export const MUIChatList: FC<MUIChatsListProps> = () => {
  const { chats, chats__button, chats__buttons, chats__link } = classes;
  const { chats: chatList } = useAppSelector((state) => state.chatsReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddNewChat = () => {
    const newChat: ChatItemInterface = {
      id: Date.now().toString(),
      chatName: prompt('Введите название чата') || '',
      messages: [],
    };

    if (newChat.chatName) {
      dispatch(addNewChat(newChat));
      navigate(`/chats/${newChat.id}`);
    }
  };

  const handleRemoveChat = (chatId: string) => {
    dispatch(removeChat(chatId));
  };

  return (
    <List className={chats}>
      {chatList.map((chat) => (
        <Link to={`/chats/${chat.id}`} key={chat.id} className={chats__link}>
          <MUIChatItem chatData={chat} />
          <CustomButton onClick={() => handleRemoveChat(chat.id)}>
            X
          </CustomButton>
        </Link>
      ))}

      <div className={chats__buttons}>
        <CustomButton className={chats__button} onClick={handleAddNewChat}>
          Создать чат
        </CustomButton>
      </div>
    </List>
  );
};
