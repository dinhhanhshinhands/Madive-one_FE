import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { TFunction } from 'i18next';

import { IRouteItem } from '@/routes/types';

type MenuItem = Required<MenuProps>['items'][number];

export const generateMenuItem = (data: IRouteItem[], transFn: TFunction<'sidebar'>, openedKey: string) => {
  const newData: MenuItem[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].path === '' || data[i].path === '*') continue;

    let children: MenuItem[] = [];

    if (data[i].children) {
      children = generateMenuItem(data[i].children || [], transFn, openedKey);
    }

    newData.push({
      key: data[i].fullPath,
      icon: data[i].isShowIcon ? openedKey === data[i].fullPath ? <FolderOpenOutlined /> : <FolderOutlined /> : null,
      children: children.length ? children : undefined,
      label: transFn(data[i].translateKey || ''),
    });
  }

  return newData;
};

export const checkOpenKey = (pathName: string): string => {
  const pathArr = pathName.split('/').filter((item) => item !== '');

  if (pathArr.length) return pathArr[0];

  return 'company';
};

export const checkSelectedKey = (pathName: string): string => {
  const pathArr = pathName.split('/').filter((item) => item !== '');

  if (pathArr.length > 1) return pathArr.join('/');
  if (pathArr.length === 1) return pathArr[0];

  return 'company/management';
};
