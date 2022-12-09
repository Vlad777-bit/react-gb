import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddMessageToChat } from '../../types/AddMessageToChat';
import { ChatItemInterface } from '../../types/ChatItemInterface';

interface ChatsState {
  chats: ChatItemInterface[];
}

const initialState: ChatsState = {
  chats: [{ id: '1', chatName: 'TestChat', messages: [] }],
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
