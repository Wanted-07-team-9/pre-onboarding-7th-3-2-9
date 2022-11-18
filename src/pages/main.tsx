import * as S from '../styles/MainStyle';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import instance from '../api/AxiosInstance';
import { GetServerSideProps } from 'next';
import { getTokenStorage } from '../utils/accessToken';
import Aside from '../Layout/BankLayout/Aside';
import Heading from '../Layout/BankLayout/Heading';
import useUserService from '../hooks/useUserService';
import BankBoard from '../Layout/BankLayout/BankBoard';
import { AdminRoute } from '../hooks/useLoginToken';

const Main = () => {
  useMain();
  useUserService();
  AdminRoute();
  return (
    <S.MainLayout>
      <Aside />
      <S.MainRightArea>
        <Heading />
        <BankBoard />
      </S.MainRightArea>
    </S.MainLayout>
  );
};
export const useMain: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  const token = await getTokenStorage('login-token');

  if (token) {
    const page = context?.query.page ? parseInt(context.query.page) : 1;
    const limit = context?.query.limit ? parseInt(context.query.limit) : 10;
    const broker = context?.query.broker ? context.query.broker : '';
    const active = context?.query.active ? context.query.active : '';
    const status = context?.query.status ? context.query.status : '';
    const queryText = context?.query.q ? context.query.q : '';

    await Promise.all([
      queryClient.prefetchQuery(['users'], async () => {
        const { headers, data } = await instance.get('/users');
        const mergedData = {
          totalCount: headers['x-total-count'] || 0,
          data: data,
        };
        return mergedData;
      }),
      queryClient.prefetchQuery(
        ['accounts', page, limit, broker, active, status, queryText],
        async () => {
          const { headers, data } = await instance.get('/accounts', {
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
export default Main;
