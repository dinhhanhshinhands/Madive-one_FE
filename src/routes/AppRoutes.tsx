import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import UserLayout from '@/layouts/user';
import Login from '@/pages/login';
import AdminRoutes from '@/routes/admin/AdminRoutes';
import { paths } from '@/routes/routes';

const AdminLayout = lazy(() => import('../layouts/admin'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
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

        {/* Public routes */}
        <Route
          path={paths.apo.login}
          element={<Login />}
        />
        <Route
          path={paths.admin.login}
          element={<Login isAdmin />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
