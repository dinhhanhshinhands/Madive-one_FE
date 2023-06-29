import { Route } from 'react-router-dom';

import { RouteItem } from '@/utils/types/route';

export const generateRoute = (routes: RouteItem[]): React.ReactNode => {
  return routes.map((route) => (
    <>
      {route.path && (
        <Route
          path={route.path}
          element={route.element}
          key={route.path}
        >
          {route.child?.length && generateRoute(route.child)}
        </Route>
      )}
      {route.child?.length && generateRoute(route.child)}
    </>
  ));
};
