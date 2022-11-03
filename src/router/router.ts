import { FC } from 'react';
import { Main } from '../pages';
import { ChatId } from '../pages/ChatId/ChatId';
import { Chats } from '../pages/Chats/Chats';
import { Profile } from '../pages/Profile/Profile';

interface RouteInterface {
  path: string;
  element: FC;
}

export const routes: RouteInterface[] = [
  { path: '/', element: Main },
  { path: '/profile', element: Profile },
  { path: '/chats', element: Chats },
  { path: '/chats/:id', element: ChatId },

  { path: '*', element: Main },
];
