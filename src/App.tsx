import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, theme } from 'antd';
import en from 'antd/locale/en_US';
import kr from 'antd/locale/ko_KR';
import { ThemeProvider } from 'styled-components';

import Loader from '@/components/molecules/Loader';
import ProtectedLayout from '@/components/templates/ProtectedLayout';
import PublicLayout from '@/components/templates/PublicLayout';

import themeConfig from '@/configs/theme';

import { LANGUAGE_KEY } from '@/constants';
import { QUERY_CACHE_TIME_DEFAULT } from '@/constants/apis';
import Login from '@/pages/login';
import { generateRoute } from '@/routes/generateRoute';
import { adminRoutes } from '@/routes/routes';

import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: QUERY_CACHE_TIME_DEFAULT,
      retry: 3, // Default retry 3
    },
  },
});

const App = () => {
  const { token } = theme.useToken();
  const [locale, setLocale] = useState(en);
  const lgn = localStorage.getItem(LANGUAGE_KEY);

  useEffect(() => {
    if (lgn && lgn.includes('ko' || 'kr' || 'KR')) {
      setLocale(kr);
    } else {
      setLocale(en);
    }
  }, [lgn]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ConfigProvider
        theme={themeConfig}
        locale={locale}
      >
        <ThemeProvider theme={{ antd: token }}>
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
        </ThemeProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
