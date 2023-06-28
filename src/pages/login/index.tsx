import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Image, Row } from 'antd';

import { useLogin } from '@/apis/hooks/auth';
import { useAuth } from '@/utils/hooks/useAuth';

import { EMAIL_KEY } from '@/constants';
import { StyledInput, StyledInputPassword } from '@/pages/login/styled';

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
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form] = Form.useForm<LoginFormType>();
  const { isLoading, mutate } = useLogin();

  const onSubmitForm = (formValues: LoginFormType) => {
    if (formValues.rememberEmail) {
      localStorage.setItem(EMAIL_KEY, formValues.email);
    } else {
      localStorage.removeItem(EMAIL_KEY);
    }

    mutate(
      {
        email: formValues.email,
        password: formValues.password,
      },
      {
        onError: (err) => {
          console.log('login error', err);
        },
        onSuccess: () => {
          console.log('login success');
        },
      }
    );

    // login(isAdmin);

    // navigate(isAdmin ? paths.admin.index : paths.apo.index, { replace: true });
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
        <Form<LoginFormType>
          className="tw-w-1/4"
          form={form}
          onFinish={onSubmitForm}
          initialValues={loginFormInitValues}
        >
          <h2 className="tw-text-3xl tw-text-center">Madive {loginTranslation('Login')}</h2>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: commonTranslation('This field is required') },
              // { type: 'email', message: commonTranslation('This field is not a valid email') },
            ]}
          >
            <StyledInput
              prefix={<MailOutlined className="tw-mr-2" />}
              placeholder={`${loginTranslation('Enter your email address')} (ex: master@madive.co.kr)`}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: commonTranslation('This field is required') }]}
          >
            <StyledInputPassword
              prefix={<LockOutlined className="tw-mr-2" />}
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
              loading={isLoading}
              disabled={isLoading}
            >
              {loginTranslation('Login')}
            </Button>
            {!isAdmin && <div className="tw-mt-3">{loginTranslation('Find password')}</div>}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
