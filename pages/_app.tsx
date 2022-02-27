import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import StyledLayout from '../components/layout/styled';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
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
}

export default MyApp;
