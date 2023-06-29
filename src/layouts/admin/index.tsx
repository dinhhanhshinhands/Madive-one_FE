import { Navigate, Outlet } from 'react-router-dom';

import AdminHeader from '@/components/organisms/Header/AdminHeader';
import AdminSidebar from '@/components/organisms/Sidebar/AdminSidebar';
import WithSidebar from '@/components/templates/WithSidebar';

import { useAuth } from '@/utils/hooks/useAuth';

import { paths } from '@/routes/routes';

const AdminLayout = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  if (!isLoggedIn() || !isAdmin()) {
    return <Navigate to={paths.admin.login} />;
  }

  return (
    <WithSidebar
      sidebar={<AdminSidebar />}
      header={<AdminHeader />}
      content={<Outlet />}
    />
  );
};

export default AdminLayout;
