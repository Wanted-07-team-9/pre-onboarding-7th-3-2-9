import React, { ComponentType, ReactElement, ReactNode, useState } from 'react';
import { GetServerSideProps } from 'next';
import type { AppInitialProps } from 'next/app';
import Head from 'next/head';
import { Session } from 'next-auth';
import { getSession, SessionProvider } from 'next-auth/react';

import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles/';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { GlobalStyles } from 'styles/global';
import Layout from 'components/common/Layout';
import { themeOptions } from 'styles/theme';

type NextPageWithLayout = ComponentType<AppInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = {
  Component: NextPageWithLayout;
  pageProps: AppInitialProps & { dehydratedState: DehydratedState; session: Session };
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
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
  const theme = createTheme(themeOptions);

  return (
    <>
      <Head>
        <title>투자 관리 서비스</title>
      </Head>
      <Toaster />
      <GlobalStyles />
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </RecoilRoot>
            {/* <ReactQueryDevtools /> */}
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
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
