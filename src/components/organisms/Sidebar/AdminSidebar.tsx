import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { MenuProps } from 'antd';

import { checkOpenKey, checkSelectedKey, generateMenuItem } from '@/components/organisms/Sidebar/helper';
import { StyledCollapse, StyledMenu } from '@/components/organisms/Sidebar/styled';

import { adminRoutes } from '@/routes/routes';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('sidebar');

  const onMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const adminMenus = generateMenuItem(adminRoutes, t, checkOpenKey(location.pathname));

  return (
    <>
      <StyledCollapse
        defaultActiveKey={['Manager menu']}
        expandIconPosition="end"
        items={[
          {
            key: 'Manager menu',
            label: t('Manager menu'),
            children: (
              <StyledMenu
                defaultOpenKeys={[checkOpenKey(location.pathname)]}
                defaultSelectedKeys={[checkSelectedKey(location.pathname)]}
                mode="inline"
                items={adminMenus}
                onClick={onMenuClick}
              />
            ),
          },
        ]}
      />
    </>
  );
};

export default AdminSidebar;
