import { getSession } from 'next-auth/react';
import LoginIndex from "components/layout/Login";

const LoginPage = () => {
  return <LoginIndex />;
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/admin/account',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
};

export default LoginPage;
