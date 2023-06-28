import { Outlet } from 'react-router-dom';

import { RouteItem } from '@/utils/types/route';

const publicRoutes: RouteItem[] = [
  // {
  //   id: 'login',
  //   path: '/login',
  //   element: <Login />,
  // },
];

const adminRoutes: RouteItem[] = [
  {
    key: 'companyManagement',
    translateKey: '업체관리',
    path: '/',
    element: <Outlet />,
    child: [
      {
        key: 'companyInformation',
        translateKey: '업체정보',
        element: <></>,
        path: '/',
      },
      {
        key: 'companyRegister',
        translateKey: '업체등록',
        element: <></>,
        path: '/',
      },
    ],
  },
  {
    key: 'storeMangement',
    translateKey: '스토어 관리',
    path: '/',
    element: <Outlet />,
    child: [
      {
        key: 'storeRegister',
        translateKey: '스토어 등록',
        element: <></>,
        path: '/',
      },
      {
        key: 'storeMenus',
        translateKey: '스토어 메뉴 일괄등록',
        element: <></>,
        path: '/',
      },
    ],
  },
  {
    key: 'menuManagement',
    translateKey: '메뉴관리',
    path: '/',
    element: <Outlet />,
  },
  {
    key: 'managerManagmenet',
    translateKey: '관리자 관리',
    path: '/',
    element: <Outlet />,
  },
];

const paths = {
  apo: {
    index: '/',
    login: '/login',
  },
  admin: {
    index: '/admin',
    login: '/admin/login',
  },
};

export { adminRoutes, paths, publicRoutes };
