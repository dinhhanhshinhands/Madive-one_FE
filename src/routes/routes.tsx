import { Navigate, Outlet } from 'react-router-dom';

import CompanyManagement from '@/pages/company/CompanyManagement';
import CompanyRegister from '@/pages/company/CompanyRegister';
import ManagerManagement from '@/pages/manager/ManagerManagement';
import MenuManagement from '@/pages/menu/MenuManagement';
import StoreMenus from '@/pages/store/StoreMenus';
import StoreRegister from '@/pages/store/StoreRegister';
import { IRouteItem } from '@/routes/types';

const routes: IRouteItem[] = [
  {
    path: '',
    fullPath: '',
    element: <Navigate to="company" />,
  },
  {
    path: 'company',
    fullPath: 'company',
    element: <Outlet />,
    children: [
      {
        path: '',
        fullPath: 'company/',
        element: (
          <Navigate
            to="management"
            replace
          />
        ),
      },
      {
        path: 'management',
        fullPath: 'company/management',
        element: <CompanyManagement />,
      },
      {
        path: 'register',
        fullPath: 'company/register',
        element: <CompanyRegister />,
      },
      {
        path: '*',
        fullPath: 'company/*',
        element: (
          <Navigate
            to="management"
            replace
          />
        ),
      },
    ],
  },
  {
    path: 'store',
    fullPath: 'store',
    element: <Outlet />,
    children: [
      {
        path: '',
        fullPath: 'store/',
        element: (
          <Navigate
            to="register"
            replace
          />
        ),
      },
      {
        path: 'register',
        fullPath: 'store/register',
        element: <StoreRegister />,
      },
      {
        path: 'menu',
        fullPath: 'store/menu',
        element: <StoreMenus />,
      },
      {
        path: '*',
        fullPath: 'store/*',
        element: (
          <Navigate
            to="register"
            replace
          />
        ),
      },
    ],
  },
  {
    path: 'menu',
    fullPath: 'menu',
    element: <MenuManagement />,
  },
  {
    path: 'manager',
    fullPath: 'manager',
    element: <ManagerManagement />,
  },
  {
    path: '*',
    fullPath: '*',
    element: <Navigate to="/" />,
  },
];

export { routes };
