import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Layout from './../components/common/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}

export default MyApp;
