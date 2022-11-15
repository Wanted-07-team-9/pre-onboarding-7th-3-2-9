import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { getSession, SessionProvider } from 'next-auth/react';

import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from 'components/styles/global';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import Layout from 'components/common/Layout';

// export interface ISession extends Session {
//   accessToken: string;
// }

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; session: Session }>) => {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);
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
      <Head>
        <title>투자 관리 서비스</title>
      </Head>
      <GlobalStyles />
      <Toaster />
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            {getLayout(<Component {...pageProps} />)}
            <ReactQueryDevtools />
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
};

// CarDetail.getLayout = function getLayout(page) {
//   return <CarDetailProvider>{page}</CarDetailProvider>;
// };

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
