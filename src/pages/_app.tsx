import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../contexts/AuthContext';
import init from './../utils/init';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<p> = AppProps<p> & {
  Component: NextPageWithLayout<p>;
};

const queryClient = new QueryClient();
const { tokenRepository } = init();

function MyApp({ Component, pageProps }: AppPropsWithLayout<{ dehydratedState: DehydratedState }>) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider tokenRepository={tokenRepository}>
          {getLayout(<Component {...pageProps} />)}
        </AuthProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
