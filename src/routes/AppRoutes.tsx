import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Loader from '@/components/molecules/Loader';
import ProtectedLayout from '@/components/templates/ProtectedLayout';
import PublicLayout from '@/components/templates/PublicLayout';

import Login from '@/pages/login';
import { generateRoute } from '@/routes/generateRoute';
import { adminRoutes } from '@/routes/routes';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader screen />}>
              <PublicLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={<Login />}
          />
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader screen />}>
              <ProtectedLayout />
            </Suspense>
          }
        >
          {generateRoute(adminRoutes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
