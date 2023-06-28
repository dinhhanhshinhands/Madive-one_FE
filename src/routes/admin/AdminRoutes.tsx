import { Routes } from 'react-router-dom';

import { generateRoute } from '@/routes/generateRoute';
import { adminRoutes } from '@/routes/routes';

const AdminRoutes = () => {
  return <Routes>{generateRoute(adminRoutes)}</Routes>;
};

export default AdminRoutes;
