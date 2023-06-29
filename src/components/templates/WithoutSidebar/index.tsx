import { ReactNode } from 'react';

import { Image, Row } from 'antd';

import loginLogo from '@/assets/images/logo.png';

const WithoutSidebar = ({ children }: { children: ReactNode }) => {
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
      {children}
    </div>
  );
};

export default WithoutSidebar;
