import { Navigate, Outlet } from 'react-router-dom';

import UserHeader from '@/components/organisms/Header/UserHeader';
import UserSidebar from '@/components/organisms/Sidebar/UserSiderbar';
import WithSidebar from '@/components/templates/WithSidebar';

import { useAuth } from '@/utils/hooks/useAuth';

import { paths } from '@/routes/routes';

const UserLayout = () => {
  const { isLoggedIn, isUser } = useAuth();

  if (!isLoggedIn() || !isUser()) {
    return <Navigate to={paths.user.login} />;
  }

  return (
    <WithSidebar
      sidebar={<UserSidebar logoutPath={paths.user.login} />}
      header={<UserHeader />}
      content={<Outlet />}
    />
  );
};

export default UserLayout;
