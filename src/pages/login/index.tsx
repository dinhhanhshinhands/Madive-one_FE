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
  const { t } = useTranslation(['common', 'login']);
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
          <h2 className="tw-text-3xl tw-text-center">Madive {t('login:login')}</h2>
          <Form.Item
            name="email"
            rules={[{ required: true, message: t('common:fieldRequire') }]}
          >
            <StyledFormItem
              prefix={<MailOutlined className="tw-mr-2" />}
              placeholder={`${t('login:enterEmail')} (ex: master@madive.co.kr)`}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: t('common:fieldRequire') }]}
          >
            <StyledFormItem
              type="password"
              prefix={<LockOutlined className="mr-2" />}
              placeholder={t('login:password')}
            />
          </Form.Item>
          <Form.Item
            name="rememberEmail"
            valuePropName="checked"
          >
            <Checkbox>{t('login:rememberEmail')}</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              className="tw-w-full tw-h-10 tw-bg-gray-600 tw-text-white"
              htmlType="submit"
            >
              {t('login:login')}
            </Button>
            {!isAdmin && <div className="tw-mt-3">{t('login:findPassword')}</div>}
          </Form.Item>
        </StyledForm>
      </div>
    </div>
  );
};

export default Login;
