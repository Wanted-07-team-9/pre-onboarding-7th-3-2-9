import React from 'react';
// import { useSession } from 'next-auth/react';
// import { useQuery } from '@tanstack/react-query';
// import Axios from 'core/apis/axiosInstance';

const UserIndex = () => {
  // const { data: session } = useSession();
  // const accessToken = session?.accessToken;
  // const page = 1;
  // const limit = 10;
  // const { data } = useQuery(
  //   ['accounts', page, limit],
  //   async () =>
  //     await Axios.get(`/accounts?_page=1&_limit=10`, {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     }).then(({ headers, data }) => {
  //       console.log('www')
  //       const mergedData = {
  //         totalCount: headers['x-total-count'],
  //         data: data
  //       }
  //       return mergedData;
  //     }),
  //   {
  //     keepPreviousData: true,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );
  // console.log(data);
  // console.log('session', session);
  // console.log('status', status);
  return <>Hello, Users Page</>;
};

export default UserIndex;
