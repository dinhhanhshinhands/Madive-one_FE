import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import WithoutSidebar from '@/components/templates/WithoutSidebar';

import { useLogin } from '@/apis/hooks/auth';
import { useAuth } from '@/utils/hooks/useAuth';

import { ADMIN_ROLE_KEY, EMAIL_KEY, USER_ROLE_KEY } from '@/constants';
import { paths } from '@/routes/routes';

type IProps = {
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

const Login = ({ isAdmin = false }: IProps): JSX.Element => {
  const { t: commonTranslation } = useTranslation('common');
  const { t: loginTranslation } = useTranslation('login');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form] = Form.useForm<LoginFormType>();
  const { isLoading } = useLogin();

  const onSubmitForm = (formValues: LoginFormType) => {
    if (formValues.rememberEmail) {
      localStorage.setItem(EMAIL_KEY, formValues.email);
    } else {
      localStorage.removeItem(EMAIL_KEY);
    }

    // mutate(
    //   {
    //     email: formValues.email,
    //     password: formValues.password,
    //   },
    //   {
    //     onSuccess: () => {
    //       login(isAdmin ? ADMIN_ROLE_KEY : USER_ROLE_KEY);
    //       navigate(isAdmin ? paths.admin.index : paths.user.index, { replace: true });
    //     },
    //     onError: (err) => {
    //       console.log('login error', err);
    //     },
    //   }
    // );

    login(isAdmin ? ADMIN_ROLE_KEY : USER_ROLE_KEY);
    navigate(isAdmin ? paths.admin.index : paths.user.index, { replace: true });
  };

  useEffect(() => {
    const email = localStorage.getItem(EMAIL_KEY);

    if (email) {
      form.setFieldValue('email', email);
    }
  }, []);

  return (
    <WithoutSidebar>
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
              { type: 'email', message: commonTranslation('This field is not a valid email') },
            ]}
          >
            <Input
              prefix={<MailOutlined className="tw-mr-2" />}
              placeholder={`${loginTranslation('Enter your email address')} (ex: master@madive.co.kr)`}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: commonTranslation('This field is required') }]}
          >
            <Input.Password
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
              className="tw-w-full tw-h-10 tw-capitalize"
              htmlType="submit"
              loading={isLoading}
              disabled={isLoading}
              type="primary"
            >
              {loginTranslation('Login')}
            </Button>
            {!isAdmin && <div className="tw-mt-3">{loginTranslation('Find password')}</div>}
          </Form.Item>
        </Form>
      </div>
    </WithoutSidebar>
  );
};

export default Login;
