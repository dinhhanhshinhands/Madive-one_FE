import { Form, Input } from 'antd';
import { styled } from 'styled-components';

const StyledForm = styled(Form)`
  width: 400px;
`;

const StyledInput = styled(Input)`
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #585858;
  padding: 10px;
`;

const StyledInputPassword = styled(Input.Password)`
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #585858;
  padding: 10px;
  span.ant-input-prefix {
    width: 22px;
    height: 22px;
  }
`;

export { StyledForm, StyledInput, StyledInputPassword };
