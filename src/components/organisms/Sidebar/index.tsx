import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button, MenuProps } from 'antd';

import { StyledCollapse, StyledMenu } from '@/components/organisms/Sidebar/styled';

import { useAuth } from '@/hooks/useAuth';

type MenuItem = Required<MenuProps>['items'][number];

const generateItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const Sidebar = ({ logoutPath }: { logoutPath: string }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { t } = useTranslation('sidebar');

  const items: MenuItem[] = [
    generateItem(t('Company management'), '1', null, [
      generateItem(t('Company information'), '2'),
      generateItem(t('Business registration'), '3'),
    ]),
    generateItem(t('Store management'), '4', null, [
      generateItem(t('Company information'), '5'),
      generateItem(t('Business registration'), '6'),
    ]),
    generateItem(t('Menu management'), '7'),
    generateItem(t('Manager management'), '8'),
  ];

  const onLogout = () => {
    logout();
    navigate(logoutPath, { replace: true });
  };

  const menu = (
    <StyledMenu
      defaultOpenKeys={['1']}
      defaultSelectedKeys={['2']}
      mode="inline"
      items={items}
    />
  );

  return (
    <>
      <div className="tw-flex tw-flex-row tw-my-2 tw-items-center tw-justify-between">
        <div>
          <div>Madive-admin</div>
          <div className="tw-text-xs">Sandbox Store</div>
        </div>
        <Button
          className="tw-capitalize"
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>

      <StyledCollapse
        defaultActiveKey={['1']}
        expandIconPosition="end"
        items={[{ key: '1', label: t('Manager menu'), children: <>{menu}</> }]}
      />
    </>
  );
};

export default Sidebar;
