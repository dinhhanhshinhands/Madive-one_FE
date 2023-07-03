import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import AdminSidebar from '@/components/organisms/Sidebar/AdminSiderbar';
import UserSidebar from '@/components/organisms/Sidebar/UserSiderbar';

import { useAuth } from '@/hooks/useAuth';

const Sidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('sidebar');
  const { logout } = useAuth();

  const onLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <>
      <div className="flex flex-row px-2 items-center justify-between mb-2">
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
      <AdminSidebar />
      <UserSidebar />
    </>
  );
};

export default Sidebar;
