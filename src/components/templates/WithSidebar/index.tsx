import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { Image, Layout } from 'antd';

import { StyledSider } from '@/components/templates/WithSidebar/styled';

import sidebarLogo from '@/assets/images/logo.png';

interface IWithSidebar {
  sidebar: ReactNode;
  header: ReactNode;
  content: ReactNode;
}

const { Content } = Layout;

const WithSidebar = ({ sidebar, header, content }: IWithSidebar) => {
  const navigate = useNavigate();

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
          {sidebar}
        </div>
      </StyledSider>
      <Layout>
        {header}
        <Content>{content}</Content>
      </Layout>
    </Layout>
  );
};

export default WithSidebar;
