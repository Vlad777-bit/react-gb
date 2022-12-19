import { FC } from 'react';
import { ChatId, Chats, Main, Photos, Profile, SignIn } from '../pages';

interface RouteInterface {
  path: string;
  element: FC;
}

export const publicRoutes: RouteInterface[] = [
  { path: '/signin', element: SignIn },
  { path: '*', element: SignIn },
];

export const privateRoutes = [
  { path: '/', element: Main },
  { path: '/profile', element: Profile },
  { path: '/chats', element: Chats },
  { path: '/chats/:id', element: ChatId },
  { path: '/photos', element: Photos },

  { path: '*', element: Main },
];
