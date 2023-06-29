import { Route } from 'react-router-dom';

import { RouteItem } from '@/utils/types/route';

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
        {/* {route.child && (
          <Route
            path="*"
            element={
              <Navigate
                to={route.child[0].fullPath || '/login'}
                replace
              />
            }
          />
        )} */}
      </Route>
    );
  });
};
