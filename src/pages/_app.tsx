import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyles } from 'components/styles/global';
import { Toaster } from 'react-hot-toast';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Toaster />
      {/* <SessionProvider session={pageProps.session} refetchInterval={30} refetchOnWindowFocus={false}> */}
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
};
export default App;