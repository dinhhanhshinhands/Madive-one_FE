import { ReactNode } from 'react';

import { Layout } from 'antd';

interface IWithSidebar {
  sidebar: ReactNode;
  header: ReactNode;
  content: ReactNode;
}

const { Content, Sider: SiderWrapper } = Layout;

const WithSidebar = ({ sidebar, header, content }: IWithSidebar) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderWrapper width="250px">{sidebar}</SiderWrapper>
      <Layout>
        {header}
        <Content>{content}</Content>
      </Layout>
    </Layout>
  );
};

export default WithSidebar;
