import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddMessageToChat } from '../../types/AddMessageToChat';
import { addNewMessageToChat } from './slice';

let timer: NodeJS.Timeout;

export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  (msg: AddMessageToChat, { dispatch }) => {
    const { chatId, message } = msg;

    dispatch(addNewMessageToChat({ chatId, message }));

    if (message.userName !== 'BOT') {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        dispatch(
          addNewMessageToChat({
            chatId,
            message: {
              id: Date.now().toString(),
              body: 'Сообщение отправлено!',
              createdAt: new Date().toString(),
              userName: 'BOT',
            },
          })
        );
      }, 2000);
    }
  }
);
