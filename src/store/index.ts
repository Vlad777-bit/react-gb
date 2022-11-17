import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { chatsReducer } from './Chats/slice';
import { profileReducer } from './Profile/slice';

export const rootReducer = combineReducers({
  chatsReducer,
  profileReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
