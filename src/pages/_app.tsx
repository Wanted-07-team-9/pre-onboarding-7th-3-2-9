import type { AppProps } from 'next/app';
import { GloboalStyles } from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GloboalStyles />
      <Component {...pageProps} />;
    </>
  );
}
