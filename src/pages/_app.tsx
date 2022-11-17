import type { AppProps } from 'next/app';
import { GloboalStyles } from '../styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClient, QueryClientProvider, DehydratedState, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { Session } from 'inspector';

export default function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; session: Session }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 30,
          },
        },
      })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}></Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider store={store}>
          <GloboalStyles />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
