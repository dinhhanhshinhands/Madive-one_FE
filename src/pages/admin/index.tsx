import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, MenuProps, theme } from 'antd';

import AdminSidebar from '@/components/organisms/Sidebar/AdminSidebar';

import { useAuth } from '@/utils/hooks/useAuth';

import { paths } from '@/routes/routes';

const { Header, Content, Footer, Sider: SiderWrapper } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin()) {
      navigate(paths.admin.login);
    }
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    // <main className="tw-flex tw-flex-row">
    //   <AdminSidebar />
    //   <Layout>
    //     <AdminHeader />
    //     <Outlet />
    //   </Layout>
    // </main>
    <Layout style={{ minHeight: '100vh' }}>
      <SiderWrapper width="250px">
        <AdminSidebar />
      </SiderWrapper>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>Bill is a cat.</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
