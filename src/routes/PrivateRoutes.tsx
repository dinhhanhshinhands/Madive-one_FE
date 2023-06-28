import { Routes } from 'react-router';

import { publicRoutes } from '@/routes/routes';
import { renderRoute } from '@/routes/utils';

export const PrivateRoutes = () => {
  return <Routes>{renderRoute(publicRoutes)}</Routes>;
};

export default PrivateRoutes;
