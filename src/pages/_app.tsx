import type { AppProps } from 'next/app';
import { GloboalStyles } from '../styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider store={store}>
          <GloboalStyles />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
