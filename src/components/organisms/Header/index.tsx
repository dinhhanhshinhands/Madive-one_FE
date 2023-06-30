import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BellFilled, MailFilled, SearchOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Badge, Button, Col, Dropdown, Image, Input, Row, Space } from 'antd';

import enFlag from '@/assets/icons/en-flag-icon.png';
import koFlag from '@/assets/icons/ko-flag-icon.png';

import { LANGUAGE_KEY } from '@/constants';

const Header = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<string>(localStorage.getItem(LANGUAGE_KEY) || 'en');

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setActiveLang(e.key);
    i18n.changeLanguage(e.key);
  };

  const menuProps = {
    items: [
      {
        label: (
          <Image
            src={enFlag}
            width={24}
            preview={false}
          />
        ),
        key: 'en',
      },
      {
        label: (
          <Image
            src={koFlag}
            width={24}
            preview={false}
          />
        ),
        key: 'ko',
      },
    ],
    onClick: handleMenuClick,
  };

  return (
    <header className="tw-h-16 tw-bg-neutral-600 tw-p-3 tw-text-white">
      <Row
        justify="space-between"
        align="middle"
        className="tw-h-full"
      >
        <Col span={8}>
          <Input
            size="middle"
            placeholder="Search..."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Space size={16}>
          <Dropdown menu={menuProps}>
            <Button>
              {activeLang === 'ko' ? (
                <Image
                  src={koFlag}
                  width={24}
                  preview={false}
                />
              ) : (
                <Image
                  src={enFlag}
                  width={24}
                  preview={false}
                />
              )}
            </Button>
          </Dropdown>
          <Badge dot>
            <Avatar
              size="default"
              icon={<MailFilled />}
            />
          </Badge>
          <Badge dot>
            <Avatar
              size="default"
              icon={<BellFilled />}
            />
          </Badge>
          <Space size={6}>
            <Avatar
              size="default"
              icon={<UserOutlined />}
            />
            <span>전체관리자</span>
          </Space>
        </Space>
      </Row>
    </header>
  );
};

export default Header;
