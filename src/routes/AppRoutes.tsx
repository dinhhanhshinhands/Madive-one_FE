import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import UserLayout from '@/layouts/user';
import AdminRoutes from '@/routes/admin/AdminRoutes';
import { publicRoutes } from '@/routes/routes';
import { renderRoute } from '@/routes/utils';

const AdminLayout = lazy(() => import('../layouts/admin'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        {renderRoute(publicRoutes)}

        {/* Admin routes */}
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
          <Route
            path="*"
            element={<Navigate to={'/admin'} />}
          />
        </Route>

        {/* User routes */}
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <UserLayout />
            </Suspense>
          }
        >
          <Route
            path="*"
            element={<AdminRoutes />}
          />
          <Route
            path="*"
            element={<Navigate to={'/'} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
