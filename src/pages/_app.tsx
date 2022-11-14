import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { getSession, SessionProvider } from 'next-auth/react';

import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from 'components/styles/global';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';

// export interface ISession extends Session {
//   accessToken: string;
// }

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; session: Session }>) => {
  // const client = new QueryClient();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>투자 관리 서비스</title>
      </Head>
      <GlobalStyles />
      <Toaster />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider
            session={pageProps.session}
            refetchInterval={50 * 60}
            refetchOnWindowFocus={false}
          >
            {/* <SessionProvider session={pageProps.session}> */}
            <Component {...pageProps} />
          </SessionProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
export default App;
