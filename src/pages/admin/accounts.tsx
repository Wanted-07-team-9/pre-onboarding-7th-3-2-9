import React from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { dehydrate, QueryClient } from '@tanstack/react-query';

import AccountIndex from 'components/layout/Admin/Accounts';
import AxiosRequest from 'core/services';
import { getToken } from 'next-auth/jwt';

const AccountsPage = () => {
  return <AccountIndex />;
};

// const getQueryData = async ({ url, headers, params }) => {
//   const { headers: resHeader, data } = await AxiosRequest.get(url, {
//     headers,
//     params,
//   });
//   const mergedData = {
//     totalCount: resHeader['x-total-count'] || 0,
//     data: data,
//   };
//   return mergedData;
// };

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
  const token = await getToken(context);
  if (token) {
    const page = context.query.page ? parseInt(context.query.page) : 1;
    const limit = context.query.limit ? parseInt(context.query.limit) : 10;
    const broker = context.query.broker ? context.query.broker : '';
    const active = context.query.active ? context.query.active : '';
    const status = context.query.status ? context.query.status : '';
    const queryText = context.query.q ? context.query.q : '';

    // getQueryData({ url: '/users', headers: { Authorization: `Bearer ${session.accessToken}` } })
    // getQueryData({
    //   url: '/accounts',
    //   headers: { Authorization: `Bearer ${session.accessToken}` },
    //   params: { _page: page, _limit: limit },
    // })
    await Promise.all([
      queryClient.prefetchQuery(['users'], async () => {
        const { headers, data } = await AxiosRequest.get('/users', {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        });
        const mergedData = {
          totalCount: headers['x-total-count'] || 0,
          data: data,
        };
        return mergedData;
      }),
      queryClient.prefetchQuery(
        ['accounts', page, limit, broker, active, status, queryText],
        async () => {
          const { headers, data } = await AxiosRequest.get('/accounts', {
            headers: { Authorization: `Bearer ${token.accessToken}` },
            params: {
              _page: page,
              _limit: limit,
              broker_id_like: broker,
              is_active_like: active,
              status_like: status,
              q: queryText,
            },
          });
          const mergedData = {
            totalCount: headers['x-total-count'] || 0,
            data: data,
          };
          return mergedData;
        }
      ),
    ]);
  }

  return { props: { dehydratedState: dehydrate(queryClient) } };
};
export default AccountsPage;
