import React from 'react';
import { getSession } from 'next-auth/react';

const DashboardPage = () => {
  return <>준비중입니다.</>;
};

export const getServerSideProps: GetServerSideProps = async context => {
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

  return { props: {} };
};

export default DashboardPage;
