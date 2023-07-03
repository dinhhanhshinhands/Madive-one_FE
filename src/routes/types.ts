import { ReactNode } from 'react';

export interface IRouteItem {
  path: string;
  fullPath: string;
  element: ReactNode;
  children?: IRouteItem[];
}

export interface IScreenPermision {
  path: string;
  isShow: boolean;
}
