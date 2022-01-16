import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import StyledLayout from '../components/layout/styled';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnReconnect: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StyledLayout theme={'dark'}>
        <Component {...pageProps} />
      </StyledLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
