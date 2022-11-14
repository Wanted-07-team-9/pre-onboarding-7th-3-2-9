import type { AppProps } from 'next/app';
import { GloboalStyles } from '../styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GloboalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
