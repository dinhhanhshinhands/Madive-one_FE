import { useEffect, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, theme } from 'antd';
import en from 'antd/locale/en_US';
import kr from 'antd/locale/ko_KR';
import { ThemeProvider } from 'styled-components';

import themeConfig from '@/configs/theme';

import { LANGUAGE_KEY } from '@/constants';
import { QUERY_CACHE_TIME_DEFAULT } from '@/constants/apis';
import AppRoutes from '@/routes/AppRoutes';
import { GlobalContextProvider } from '@/stores/GlobalContext';

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
      <GlobalContextProvider>
        <ConfigProvider
          theme={themeConfig}
          locale={locale}
        >
          <ThemeProvider theme={{ antd: token }}>
            <AppRoutes />
          </ThemeProvider>
        </ConfigProvider>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
};

export default App;
