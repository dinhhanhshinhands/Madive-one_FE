import { RouteItem } from '@/utils/types/route';

import CompanyManagement from '@/pages/admin/company/CompanyManagement';
import CompanyRegister from '@/pages/admin/company/CompanyRegister';
import ManagerManagement from '@/pages/admin/manager/ManagerManagement';
import MenuManagement from '@/pages/admin/menu/MenuManagement';
import StoreMenus from '@/pages/admin/store/StoreMenus';
import StoreRegister from '@/pages/admin/store/StoreRegister';

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
    child: [
      {
        key: 'companyInformation',
        translateKey: '업체정보',
        element: <CompanyManagement />,
        path: 'admin/company/list',
      },
      {
        key: 'companyRegister',
        translateKey: '업체등록',
        element: <CompanyRegister />,
        path: 'admin/company/register',
      },
    ],
  },
  {
    key: 'storeMangement',
    translateKey: '스토어 관리',
    child: [
      {
        key: 'storeRegister',
        translateKey: '스토어 등록',
        element: <StoreRegister />,
        path: 'store/register',
      },
      {
        key: 'storeMenus',
        translateKey: '스토어 메뉴 일괄등록',
        element: <StoreMenus />,
        path: 'store/menu',
      },
    ],
  },
  {
    key: 'menuManagement',
    translateKey: '메뉴관리',
    path: 'menu',
    element: <MenuManagement />,
  },
  {
    key: 'managerManagmenet',
    translateKey: '관리자 관리',
    path: 'manager',
    element: <ManagerManagement />,
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
