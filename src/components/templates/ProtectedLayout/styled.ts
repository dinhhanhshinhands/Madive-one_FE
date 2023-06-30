import { Layout } from 'antd';
import { styled } from 'styled-components';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background: ${(props) => props.theme.antd.colorBgContainer}!important;
`;

export { StyledSider };
