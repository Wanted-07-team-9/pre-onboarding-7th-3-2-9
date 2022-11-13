// import { useSession } from 'next-auth/react';
import Layout from 'components/common/Layout';
import AccountIndex from 'components/layout/Admin/Account';

const AccountPage = () => {
  // const { data: session, status } = useSession();
  // // console.log('session', session)
  // // console.log('status', status)

  // if (status === "authenticated") {
  //   // 인증됨
  // }
  return (
    <Layout>
      <AccountIndex />
    </Layout>
  );
};

export default AccountPage;
