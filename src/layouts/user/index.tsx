import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Layout } from 'antd';

import AdminHeader from '@/components/organisms/Header/AdminHeader';
import AdminSidebar from '@/components/organisms/Sidebar/AdminSidebar';

import { useAuth } from '@/utils/hooks/useAuth';

import { paths } from '@/routes/routes';

const { Header, Content, Footer, Sider: SiderWrapper } = Layout;

const UserLayout = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin()) {
      navigate(paths.apo.login);
    }
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderWrapper width="250px">
        <AdminSidebar />
      </SiderWrapper>
      <Layout>
        <AdminHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
