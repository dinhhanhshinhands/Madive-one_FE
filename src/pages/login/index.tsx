import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Image, Row } from 'antd';

import { useAuth } from '@/utils/hooks/useAuth';

import { StyledForm, StyledFormItem } from '@/pages/login/styled';
import { paths } from '@/routes/routes';

const loginLogo = '/src/assets/images/logo.png';

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
  const { t: commonTranslation } = useTranslation('common');
  const { t: loginTranslation } = useTranslation('login');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmitForm = (formValues: unknown) => {
    console.log('formValues', formValues);

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
          <h2 className="tw-text-3xl tw-text-center">Madive {loginTranslation('Login')}</h2>
          <Form.Item
            name="email"
            rules={[{ required: true, message: commonTranslation('This field is required') }]}
          >
            <StyledFormItem
              prefix={<MailOutlined className="tw-mr-2" />}
              placeholder={`${loginTranslation('Enter your email address')} (ex: master@madive.co.kr)`}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: commonTranslation('This field is required') }]}
          >
            <StyledFormItem
              type="password"
              prefix={<LockOutlined className="mr-2" />}
              placeholder={loginTranslation('Password')}
              // placeholder={commonTranslation('capitalize', { value: loginTranslation('Password') })}
            />
          </Form.Item>
          <Form.Item
            name="rememberEmail"
            valuePropName="checked"
          >
            <Checkbox>{loginTranslation('Remember Email')}</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              className="tw-w-full tw-h-10 tw-bg-gray-600 tw-text-white tw-capitalize"
              htmlType="submit"
            >
              {loginTranslation('Login')}
            </Button>
            {!isAdmin && <div className="tw-mt-3">{loginTranslation('Find password')}</div>}
          </Form.Item>
        </StyledForm>
      </div>
    </div>
  );
};

export default Login;
