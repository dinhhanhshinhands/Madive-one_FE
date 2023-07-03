import { Navigate, Outlet } from 'react-router-dom';

import { Image, Row } from 'antd';

import loginLogo from '@/assets/images/logo.png';

import { useAuth } from '@/hooks/useAuth';

const PublicLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative">
      <div className="absolute top-5 left-5">
        <Row
          justify="center"
          align="top"
        >
          <Image
            src={loginLogo}
            width={130}
            preview={false}
          />
          <h1>Madive ONE System</h1>
        </Row>
      </div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
