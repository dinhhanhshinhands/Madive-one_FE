import { Routes } from 'react-router';

import { publicRoutes } from '@/routes/routes';
import { renderRoute } from '@/routes/utils';

export const PublicRoutes = () => {
  return <Routes>{renderRoute(publicRoutes)}</Routes>;
};

export default PublicRoutes;
