import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FolderOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Image, MenuProps, Row } from 'antd';

import { StyledMenu } from '@/components/organisms/Sidebar/styled';

import sidebarLogo from '@/assets/images/logo.png';
import { useAuth } from '@/utils/hooks/useAuth';
import { RouteItem } from '@/utils/types/route';

import { adminRoutes, paths } from '@/routes/routes';

type MenuItem = Required<MenuProps>['items'][number];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const UserSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onClickLogout = () => {
    logout();
    navigate(paths.admin.login, { replace: true });
  };

  const getMenuItems = () => {
    const routes = adminRoutes.map((route) => {
      return renderMenuItem(route, true /* is parent menu */);
    });
    return routes;
  };

  const renderMenuItem = (menuItem: RouteItem, isParentMenu = false): MenuItem => {
    const { key, translateKey, child, path } = menuItem;
    let children;

    if (child?.length) {
      children = child.map((route) => {
        return renderMenuItem(route);
      });
    }

    return {
      key: key,
      children: children,
      label: path ? <Link to={path}>{translateKey}</Link> : translateKey,
      icon: isParentMenu ? <FolderOutlined /> : undefined,
      className: isParentMenu ? 'admin-parent-menu' : 'admin-child-menu',
    } as MenuItem;
  };

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Col className="tw-bg-white tw-h-full">
      <Col className="tw-p-3 tw-pt-1">
        <Image
          src={sidebarLogo}
          width={60}
          preview={false}
        />
        <Row justify="space-between">
          <span>Madive-admin</span>
          <Button onClick={onClickLogout}>로그아웃</Button>
        </Row>
      </Col>
      <Col>
        <div className="tw-px-3">Sandbox Store</div>
        <Collapse
          expandIconPosition="end"
          bordered={false}
          ghost
          items={[
            {
              label: '관리자 메뉴',
              children: (
                <StyledMenu
                  inlineIndent={0}
                  mode="inline"
                  expandIcon={<></>}
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
                  items={getMenuItems()}
                />
              ),
            },
          ]}
        />
      </Col>
    </Col>
  );
};

export default UserSidebar;
