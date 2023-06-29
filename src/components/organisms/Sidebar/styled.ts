import { Collapse, Menu } from 'antd';
import { styled } from 'styled-components';

const StyledCollapse = styled(Collapse).withConfig({
  shouldForwardProp: (prop) => ![''].includes(prop),
})`
  border: none;

  .ant-collapse-item {
    border: none;

    .ant-collapse-header {
      padding-bottom: 0;
    }

    .ant-collapse-content {
      border: none;

      .ant-collapse-content-box {
        padding-top: 0;
      }
    }
  }
`;

const StyledMenu = styled(Menu).withConfig({
  shouldForwardProp: (prop) => ![''].includes(prop),
})`
  border-inline-end: none !important;
`;

export { StyledCollapse, StyledMenu };
