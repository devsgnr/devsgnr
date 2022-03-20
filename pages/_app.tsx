import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import StyledLayout from '../components/layout/styled';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnReconnect: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StyledLayout>
        <Toaster />
        <Component {...pageProps} />
      </StyledLayout>
    </QueryClientProvider>
  );
};

export default MyApp;
