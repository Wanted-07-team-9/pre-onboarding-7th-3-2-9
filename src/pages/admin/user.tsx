import React from 'react';

// import { useSession } from 'next-auth/react';
import Layout from 'components/common/Layout';
import UserIndex from 'components/layout/Admin/User';

const AccountPage = () => {
  // const { data: session, status } = useSession();
  // // console.log('session', session)
  // // console.log('status', status)

  // if (status === "authenticated") {
  //   // 인증됨
  // }
  return (
    <Layout>
      <UserIndex />
    </Layout>
  );
};

export default AccountPage;
