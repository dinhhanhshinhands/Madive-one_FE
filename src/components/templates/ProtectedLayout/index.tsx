import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { Image, Layout } from 'antd';

import Header from '@/components/organisms/Header';
import Sidebar from '@/components/organisms/Sidebar';
import { StyledSider } from '@/components/templates/ProtectedLayout/styled';

import sidebarLogo from '@/assets/images/logo.png';

import { useAuth } from '@/hooks/useAuth';

const { Content } = Layout;

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledSider
        width="300"
        className="tw-p-4"
      >
        <div className="tw-flex tw-flex-col">
          <Image
            className="tw-cursor-pointer"
            src={sidebarLogo}
            width={60}
            preview={false}
            onClick={() => {
              navigate('/');
            }}
          />
          <Sidebar />
        </div>
      </StyledSider>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProtectedLayout;
