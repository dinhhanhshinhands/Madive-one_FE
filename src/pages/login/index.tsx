import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import { useLogin } from '@/apis/hooks/auth';

import { EMAIL_KEY } from '@/constants';
import { useAuth } from '@/hooks/useAuth';

interface ILoginForm {
  email: string;
  password: string;
  rememberEmail: boolean;
}

const initialValues = {
  email: '',
  password: '',
  rememberEmail: true,
};

const Login = (): JSX.Element => {
  const { t: commonTranslation } = useTranslation('common');
  const { t: loginTranslation } = useTranslation('login');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form] = Form.useForm<ILoginForm>();
  const { isLoading } = useLogin();

  const onSubmitForm = (formValues: ILoginForm) => {
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
    //       login();
    //       navigate('/');
    //     },
    //     onError: (err) => {
    //       console.log('login error', err);
    //     },
    //   }
    // );

    login();
    navigate('/');
  };

  useEffect(() => {
    const email = localStorage.getItem(EMAIL_KEY);

    if (email) {
      form.setFieldValue('email', email);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Form<ILoginForm>
        className="w-1/4"
        form={form}
        onFinish={onSubmitForm}
        initialValues={initialValues}
      >
        <h2 className="text-3xl text-center">Madive {loginTranslation('Login')}</h2>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: commonTranslation('This field is required') },
            { type: 'email', message: commonTranslation('This field is not a valid email') },
          ]}
        >
          <Input
            prefix={<MailOutlined className="mr-2" />}
            placeholder={`${loginTranslation('Enter your email address')} (ex: master@madive.co.kr)`}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: commonTranslation('This field is required') }]}
        >
          <Input.Password
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
            className="w-full h-10 capitalize"
            htmlType="submit"
            loading={isLoading}
            disabled={isLoading}
            type="primary"
          >
            {loginTranslation('Login')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
