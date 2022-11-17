import React from 'react';
import type { AppProps } from 'next/app';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from  '@tanstack/react-query'
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <GlobalStyles />
          <Component {...pageProps} />
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>

  )
}
