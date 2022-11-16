import { dehydrate, QueryClient } from '@tanstack/react-query';
import AxiosRequest from 'core/services';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import AccountDetailIndex from 'components/layout/Admin/Accounts/Detail';

const AccountDetail = () => {
  return (
    <>
      <AccountDetailIndex />
    </>
  );
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

  const token = await getToken(context);
  if (token) {
    const id = context.query.id ? parseInt(context.query.id) : 1;

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
