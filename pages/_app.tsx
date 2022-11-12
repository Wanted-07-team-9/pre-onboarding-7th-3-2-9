import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from '../src/styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles/>
      <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
