import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useTypedRedux';
import { privateRoutes, publicRoutes } from '../../router/router';

export const RouteComponent = () => {
  const isAuth = useAppSelector((state) => state.profileReducer.isAuth);
  const routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
