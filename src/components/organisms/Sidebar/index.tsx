import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { Button, MenuProps } from 'antd';
import { TFunction } from 'i18next';

import { StyledCollapse, StyledMenu } from '@/components/organisms/Sidebar/styled';

import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/routes/routes';
import { IRouteItem } from '@/routes/types';

type MenuItem = Required<MenuProps>['items'][number];

const generateMenuItem = (data: IRouteItem[], transFn: TFunction<'sidebar'>, openedKey: string) => {
  const newData: MenuItem[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].path === '' || data[i].path === '*') continue;

    let children: MenuItem[] = [];

    if (data[i].children) {
      children = generateMenuItem(data[i].children || [], transFn, openedKey);
    }

    newData.push({
      key: data[i].fullPath,
      icon: children.length ? openedKey === data[i].fullPath ? <FolderOpenOutlined /> : <FolderOutlined /> : null,
      children: children.length ? children : undefined,
      label: transFn(data[i].translateKey || ''),
    });
  }

  return newData;
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('sidebar');
  const { logout } = useAuth();

  const checkOpenKey = (): string => {
    const pathArr = location.pathname.split('/').filter((item) => item !== '');

    if (pathArr.length > 1) return pathArr[0];

    return 'company';
  };

  const checkSelectedKey = (): string => {
    const pathArr = location.pathname.split('/').filter((item) => item !== '');

    if (pathArr.length > 1) return pathArr.join('/');
    if (pathArr.length === 1) return pathArr[0];

    return 'company/management';
  };

  const onLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const onMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const items = generateMenuItem(routes, t, checkOpenKey());

  const menu = (
    <StyledMenu
      defaultOpenKeys={[checkOpenKey()]}
      defaultSelectedKeys={[checkSelectedKey()]}
      mode="inline"
      items={items}
      onClick={onMenuClick}
    />
  );

  return (
    <>
      <div className="flex flex-row my-2 items-center justify-between">
        <div>
          <div>Madive-admin</div>
          <div className="text-xs">Sandbox Store</div>
        </div>
        <Button
          className="capitalize"
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>

      <StyledCollapse
        defaultActiveKey={['Manager menu']}
        expandIconPosition="end"
        items={[{ key: 'Manager menu', label: t('Manager menu'), children: <>{menu}</> }]}
      />
    </>
  );
};

export default Sidebar;
