import React from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

import UserIndex from 'components/layout/Admin/User';

const AccountPage = () => {
  // const { data: session, status } = useSession();
  // // console.log('session', session)
  // // console.log('status', status)

  // if (status === "authenticated") {
  //   // 인증됨
  // }
  return <UserIndex />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const session = await getSession(context);
  const expires = new Date(session.expires);
  if (new Date() > expires) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  // const token = await getToken(context);
  // if (token) {
  //   const page = context.query.page ? parseInt(context.query.page) : 1;
  //   const limit = context.query.limit ? parseInt(context.query.limit) : 10;

  //   // getQueryData({ url: '/users', headers: { Authorization: `Bearer ${session.accessToken}` } })
  //   // getQueryData({
  //   //   url: '/accounts',
  //   //   headers: { Authorization: `Bearer ${session.accessToken}` },
  //   //   params: { _page: page, _limit: limit },
  //   // })
  //   await Promise.all([
  //     queryClient.prefetchQuery(
  //       ['users'],
  //       async () => {
  //         const { headers, data } = await AxiosRequest.get('/users', {
  //           headers: { Authorization: `Bearer ${token.accessToken}` },
  //         });
  //         const mergedData = {
  //           totalCount: headers['x-total-count'] || 0,
  //           data: data,
  //         };
  //         return mergedData;
  //       }
  //     ),
  //     queryClient.prefetchQuery(
  //       ['accounts', page, limit],
  //       async () => {
  //         const { headers, data } = await AxiosRequest.get('/accounts', {
  //           headers: { Authorization: `Bearer ${token.accessToken}` },
  //           params: { _page: page, _limit: limit },
  //         });
  //         const mergedData = {
  //           totalCount: headers['x-total-count'] || 0,
  //           data: data,
  //         };
  //         return mergedData;
  //       }
  //     ),
  //   ]);
  // }

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default AccountPage;
