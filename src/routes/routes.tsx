import { Navigate, Outlet } from 'react-router-dom';

import CompanyManagement from '@/pages/company/CompanyManagement';
import CompanyRegister from '@/pages/company/CompanyRegister';
import ManagerManagement from '@/pages/manager/ManagerManagement';
import MenuManagement from '@/pages/menu/MenuManagement';
import StoreMenus from '@/pages/store/StoreMenus';
import StoreRegister from '@/pages/store/StoreRegister';
import { IRouteItem } from '@/routes/types';

const adminRoutes: IRouteItem[] = [
  {
    path: '',
    fullPath: '',
    element: <Navigate to="company" />,
  },
  {
    path: 'company',
    fullPath: 'company',
    isShowIcon: true,
    translateKey: 'Company management',
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
        translateKey: 'Company information',
        element: <CompanyManagement />,
      },
      {
        path: 'register',
        fullPath: 'company/register',
        translateKey: 'Business registration',
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
    isShowIcon: true,
    translateKey: 'Store management',
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
        translateKey: 'Store registration',
        element: <StoreRegister />,
      },
      {
        path: 'menu',
        fullPath: 'store/menu',
        translateKey: 'Store batch registration',
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
    isShowIcon: true,
    translateKey: 'Menu management',
    element: <MenuManagement />,
  },
  {
    path: 'manager',
    fullPath: 'manager',
    isShowIcon: true,
    translateKey: 'Business registration',
    element: <ManagerManagement />,
  },
  {
    path: '*',
    fullPath: '*',
    element: <Navigate to="/" />,
  },
];

export { adminRoutes };
