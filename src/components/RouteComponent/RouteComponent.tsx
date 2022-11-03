import { Route, Routes } from 'react-router-dom';
import { routes } from '../../router/router';

export const RouteComponent = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
