import { Route } from 'react-router-dom';

import { RouteItem } from '@/types/route';

export const renderRoute = (routes: RouteItem[]): React.ReactNode => {
  return routes.map((route) => {
    return (
      <Route
        path={route.path}
        element={route.element}
        key={route.path}
        id={route.key}
      >
        {route.child && renderRoute(route.child)}
      </Route>
    );
  });
};
