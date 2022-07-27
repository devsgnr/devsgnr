import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/layout';
import '../styles/dist/output.css';
import '../public/neue-montreal/stylesheet.css';
import '../public/migra/stylesheet.css';
import '../public/telegraf/stylesheet.css';
import MouseCursor from '../components/cursor';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnReconnect: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <MouseCursor />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
