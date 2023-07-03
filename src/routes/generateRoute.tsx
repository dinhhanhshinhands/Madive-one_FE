import { Route } from 'react-router-dom';

import { IRouteItem, IScreenPermision } from '@/routes/types';

const screenPermissionTest: IScreenPermision[] = [
  {
    path: 'company',
    isShow: true,
  },
  {
    path: 'company/management',
    isShow: true,
  },
  {
    path: 'company/register',
    isShow: true,
  },
  {
    path: 'store',
    isShow: true,
  },
  {
    path: 'store/register',
    isShow: true,
  },
  {
    path: 'store/menu',
    isShow: true,
  },
  {
    path: 'menu',
    isShow: true,
  },
  {
    path: 'manager',
    isShow: true,
  },
];

export const checkShowRoute = (route: IRouteItem, screenPermission: IScreenPermision[]) => {
  if (route.path === '' || route.path === '*') return true;

  return !!screenPermission.find((item) => item.path === route.fullPath && item.isShow);
};

export const generateRoute = (routes: IRouteItem[]) => {
  return routes.map((route) => {
    if (checkShowRoute(route, screenPermissionTest)) {
      return (
        <Route
          path={route.path}
          element={route.element}
          key={route.fullPath}
        >
          {route?.children && generateRoute(route.children)}
        </Route>
      );
    }

    return null;
  });
};
