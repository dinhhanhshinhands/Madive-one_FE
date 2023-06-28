import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation('common');

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div>
          <h1 className="text-3xl font-bold text-blue-500 underline">{t('Welcome')}</h1>
        </div>
        <div>
          <p className="text-center">Choose Language</p>
          <button
            className="px-6 py-2 text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 shadow-blue-400/30"
            onClick={() => {
              localStorage.setItem('i18nextLng', 'en'); // Set language to remember next time visit
              i18n.changeLanguage('en');
            }}
          >
            English
          </button>
          <button
            className="px-6 py-2 text-sm text-blue-100 transition-colors duration-300 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 shadow-blue-400/30"
            onClick={() => {
              localStorage.setItem('i18nextLng', 'kr'); // Set language to remember next time visit
              i18n.changeLanguage('kr');
            }}
          >
            Korean
          </button>
        </div>
      </div> */}
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
