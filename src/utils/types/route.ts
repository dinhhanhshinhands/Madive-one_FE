import { ReactNode } from 'react';

export interface RouteItem {
  path: string;
  element?: ReactNode;
  menuName?: string;
  child?: RouteItem[];
  icon?: ReactNode;
  translateKey?: string;
  key: string;
  fullPath?: string;
  isHidden?: boolean;
}
