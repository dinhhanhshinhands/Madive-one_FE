import { BellFilled, MailFilled, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Input, Row, Space } from 'antd';

const UserHeader = () => {
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

export default UserHeader;
