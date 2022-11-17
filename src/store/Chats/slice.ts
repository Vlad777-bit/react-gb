import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { AddMessageToChat } from '../../types/AddMessageToChat';
import { ChatItemInterface } from '../../types/ChatItemInterface';

interface ChatsState {
  chats: ChatItemInterface[];
}

const initialState: ChatsState = {
  chats: [
    {
      id: '1',
      chatName: '<VoFront />',
      messages: [
        {
          id: '1',
          body: 'Привет всем!',
          userName: 'Пользователь',
          createdAt: format(new Date(), 'HH:mm'),
        },
        {
          id: '2',
          body: 'Hi!',
          userName: 'Другой пользователь',
          createdAt: format(new Date(), 'HH:mm'),
        },
        {
          id: '3',
          body: 'Some text and a little text',
          userName: 'VlaDDoS',
          createdAt: format(new Date(), 'HH:mm'),
        },
      ],
    },
    {
      id: '2',
      chatName: 'GB_PHP',
      messages: [
        {
          id: '1',
          body: 'Как запустить Docker с php8.1?',
          userName: 'Person',
          createdAt: format(new Date(), 'HH:mm'),
        },
        {
          id: '2',
          body: 'Доку почитай',
          userName: 'Другой пользователь',
          createdAt: format(new Date(), 'HH:mm'),
        },
      ],
    },
    { id: '3', chatName: 'VK Мusic BOX Iphone', messages: [] },
    { id: '4', chatName: 'Open Source', messages: [] },
  ],
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addNewChat(state, action: PayloadAction<ChatItemInterface>) {
      state.chats.push(action.payload);
    },

    removeChat(state, action: PayloadAction<number | string>) {
      state.chats = state.chats.filter((chat) => chat.id !== action.payload);
    },

    addNewMessageToChat(state, { payload }: PayloadAction<AddMessageToChat>) {
      state.chats.forEach((chat) => {
        if (payload.chatId === chat.id) {
          chat.messages?.push(payload.message);
        }
      });
    },
  },
});

export const chatsReducer = chatsSlice.reducer;
export const { addNewChat, removeChat, addNewMessageToChat } =
  chatsSlice.actions;
