import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QUERY_CACHE_TIME_DEFAULT } from '@/constants/apis';
import AppRoutes from '@/routes/AppRoutes';

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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
