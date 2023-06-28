import { useNavigate } from 'react-router-dom';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Image, Input, Row } from 'antd';
import styled from 'styled-components';

import { useAuth } from '@/utils/hooks/useAuth';

import { paths } from '@/routes/routes';

const loginLogo = '/src/assets/images/logo.png';

const StyledForm = styled(Form)`
  width: 400px;
`;

const StyledFormItem = styled(Input)`
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #585858;
  padding: 10px;
`;

type LoginProps = {
  isAdmin?: boolean;
};

type LoginFormType = {
  email: string;
  password: string;
  rememberEmail: boolean;
};

const loginFormInitValues = {
  email: '',
  password: '',
  rememberEmail: true,
};

const Login = ({ isAdmin = false }: LoginProps): JSX.Element => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const onSubmitForm = (formValues: any) => {
    login(isAdmin);
    navigate(isAdmin ? paths.admin.index : paths.apo.index, { replace: true });
  };
  return (
    <div className="tw-relative">
      <div className="tw-absolute tw-top-5 tw-left-5">
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
      <div className="tw-flex tw-items-center tw-justify-center tw-h-screen">
        <StyledForm
          onFinish={onSubmitForm}
          initialValues={loginFormInitValues}
        >
          <h2 className="tw-text-3xl tw-text-center">Madive 로그인</h2>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <StyledFormItem
              prefix={<MailOutlined className="tw-mr-2" />}
              placeholder="이메일 입력 (ex : master@madive.co.kr)"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'This field is required' }]}
          >
            <StyledFormItem
              type="password"
              prefix={<LockOutlined className="mr-2" />}
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item
            name="rememberEmail"
            valuePropName="checked"
          >
            <Checkbox checked>이메일 기억하기</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              className="tw-w-full tw-h-10 tw-bg-gray-600 tw-text-white"
              htmlType="submit"
            >
              로그인
            </Button>
            {!isAdmin && <div className="tw-mt-3">비밀번호 찾기</div>}
          </Form.Item>
        </StyledForm>
      </div>
    </div>
  );
};

export default Login;
