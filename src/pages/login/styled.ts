import { Form, Input } from 'antd';
import { styled } from 'styled-components';

const StyledForm = styled(Form)`
  width: 400px;
`;

const StyledFormItem = styled(Input)`
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #585858;
  padding: 10px;
`;

export { StyledForm, StyledFormItem };
