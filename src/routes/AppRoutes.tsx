import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '@/pages/login';
import AdminRoutes from '@/routes/admin/AdminRoutes';
import { paths } from '@/routes/routes';

const AdminLayout = lazy(() => import('../pages/admin'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.apo.login}
          element={<Login />}
        />
        <Route
          path={paths.admin.login}
          element={<Login isAdmin />}
        />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<></>}>
              <AdminLayout />
            </Suspense>
          }
        >
          <Route
            path="*"
            element={<AdminRoutes />}
          />
          {/* {generateRoute(adminRoutes)} */}
        </Route>
        {/* <PublicRoutes /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
