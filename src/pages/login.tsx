import React from 'react';
import { getSession } from 'next-auth/react';
import LoginIndex from 'components/layout/Login';
import { GetServerSideProps } from 'next';

const LoginPage = () => {
  return <LoginIndex />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/admin/accounts',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

LoginPage.getLayout = page => page;
export default LoginPage;
