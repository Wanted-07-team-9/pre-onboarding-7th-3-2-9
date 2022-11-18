import { GetServerSideProps } from 'next';

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getToken } from 'next-auth/jwt';

import AccountDetailIndex from 'components/layout/Admin/Accounts/Detail';
import AxiosRequest from 'core/services';

const AccountDetail = () => {
  return (
    <>
      <AccountDetailIndex />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();

  const token = await getToken(context);
  if (token) {
    const id = context.params.id ? +context.params.id : 1;
    await queryClient.prefetchQuery(['account', id], async () => {
      const { data } = await AxiosRequest.get(`/accounts/${id}`, {
        headers: { Authorization: `Bearer ${token.accessToken}` },
      });
      const { data: userData } = await AxiosRequest.get(`/users/${data.user_id}`, {
        headers: { Authorization: `Bearer ${token.accessToken}` },
      });
      const mergeData = { ...data, user_name: userData.name };
      return mergeData;
    });
  }

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default AccountDetail;
