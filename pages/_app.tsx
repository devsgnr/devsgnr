/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LoadingScreen } from '../components/layout/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnReconnect: false },
    },
  });

  const Layout = dynamic(() => import('../components/layout/index'), {
    suspense: true,
    ssr: false,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingScreen />}>
        <div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Suspense>
    </QueryClientProvider>
  );
};

export default MyApp;
