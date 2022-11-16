import React from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

import UserIndex from 'components/layout/Admin/User';

const AccountPage = () => {
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

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default AccountPage;
