import { Menu } from 'antd';
import { styled } from 'styled-components';

const StyledMenu = styled(Menu)`
  .ant-menu-submenu-title {
    margin-inline: 0;
    margin-block: 0;
  }
  .admin-child-menu {
    padding-left: 24px !important;
  }
`;

export { StyledMenu };
