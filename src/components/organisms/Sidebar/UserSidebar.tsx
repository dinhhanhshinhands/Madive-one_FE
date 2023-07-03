import { useTranslation } from 'react-i18next';

import { CopyOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import { StyledCollapse } from '@/components/organisms/Sidebar/styled';

const companyOptionList = [
  { value: 'Company-1', label: 'Company 1' },
  { value: 'Company-2', label: 'Company 2' },
  { value: 'Company-3', label: 'Company 3' },
];

const storeOptionList = [
  { value: 'Store-1', label: 'Store 1' },
  { value: 'Store-2', label: 'Store 2' },
  { value: 'Store-3', label: 'Store 3' },
];

const UserSidebar = () => {
  const { t } = useTranslation('sidebar');

  const handleCompanyChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleStoreChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <StyledCollapse
      defaultActiveKey={['Manager menu']}
      expandIconPosition="end"
      items={[
        {
          key: 'Partner menu',
          label: t('Partner menu'),
          children: (
            <div className="py-4">
              <div className="py-2">
                View Store <CopyOutlined />
              </div>
              <div className="pt-2">
                Account
                <Select
                  defaultValue={companyOptionList[0].value}
                  style={{ width: '100%' }}
                  onChange={handleCompanyChange}
                  options={companyOptionList}
                />
              </div>
              <div className="pt-2">
                Store
                <Select
                  defaultValue={storeOptionList[0].value}
                  style={{ width: '100%' }}
                  onChange={handleStoreChange}
                  options={storeOptionList}
                />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};

export default UserSidebar;
