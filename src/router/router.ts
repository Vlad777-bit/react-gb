import { FC } from 'react';
import { ChatId, Chats, Main, Photos, Profile } from '../pages';

interface RouteInterface {
  path: string;
  element: FC;
}

export const routes: RouteInterface[] = [
  { path: '/', element: Main },
  { path: '/profile', element: Profile },
  { path: '/chats', element: Chats },
  { path: '/chats/:id', element: ChatId },
  { path: '/photos', element: Photos },

  { path: '*', element: Main },
];
