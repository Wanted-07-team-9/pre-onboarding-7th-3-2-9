import React, { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  useEffect(() => {
    toast('준비중입니다.', {
      icon: '🚧',
    });
  }, []);
  return <>Hello, Dashboard Page.</>;
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
