import React from 'react';

import { getSession } from 'next-auth/react';
import { dehydrate, QueryClient } from 'react-query';
// import Axios from 'core/apis/axiosInstance';
import Layout from 'components/common/Layout';
import AccountIndex from 'components/layout/Admin/Account';
import { GetServerSideProps } from 'next';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// const getPosts = async () => {
//   const { data } = await Axios.get("accounts");
//   return data;
// };

const AccountPage = () => {
  // const router = useRouter();
  // const [page, setPage] = useState(parseInt(router.query.page) || 1);

  // const {
  //   data: posts,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery<Post[], Error>("posts", getPosts, {
  //   refetchOnWindowFocus: false,
  // });
  // console.log(posts)
  // console.log(setPage)
  // console.log(router)
  // const { data } = useQuery(
  //   "accounts",
  //   async () =>
  //     await Axios.get('/accounts').then((result) =>
  //       result.json()
  //     )
  // );
  // console.log(data);
  return (
    <Layout>
      <AccountIndex />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const queryClient = new QueryClient();
  const session = await getSession(context);
  if (session) {
    // let page = 1;
    // if (context.query.page) {
    //   page = parseInt(context.query.page);
    // }
    // await queryClient.prefetchQuery(
    //   ['accounts', page],
    //   async () => {
    //     const { data } = await Axios.get(`/accounts?_page=${page}`, {
    //       headers: { Authorization: `Bearer ${session.accessToken}` },
    //     });
    //     return data;
    //   }
    // );
  }
  return { props: { dehydratedState: dehydrate(queryClient) } };
  // if (context.query.page) {
  //   page = parseInt(context.query.page);
  // }
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(
  //   ["accounts", page],
  //   async () =>
  //     await fetch(
  //       `https://rickandmortyapi.com/api/character/?page=${page}`
  //     ).then((result) => result.json()),
  // );
  // return { props: { dehydratedState: dehydrate(queryClient) }    };
  return { props: {} };
};
export default AccountPage;
