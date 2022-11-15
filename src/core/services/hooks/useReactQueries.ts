import { useQueries } from '@tanstack/react-query';
// import getMergeTest from 'core/apis/getMergeTest';
import AxiosRequest from 'core/services';
import { UseReactQueriesProps } from '../types';

const useReactQueries = (queries: UseReactQueriesProps[]) => {
  const [accounts, users] = useQueries({
    queries: queries.map(item => ({
      queryKey: item.queryKey,
      queryFn: async () => {
        const { headers, data } = await AxiosRequest.get(item.url, {
          headers: item.headers,
          params: item.params,
        });
        const mergedData = {
          totalCount: headers['x-total-count'] || 0,
          data: data,
        };
        return mergedData;
      },
      enabled: item.enabled,
      select: data => {
        if (item.url === '/users') {
          // {totalCount: 0, data: Array(101)}
          // return { ...data, data: data.data.map(user => ({ id: user.id, user_name: user.name })) };
          // return {...data, data.data.map((user) => ({id: user.id, user_name: user.name}))};
          return { ...data, data: data.data.map(user => ({ id: user.id, user_name: user.name })) };
          // console.log(data)
        }

        return data;
      },
    })),
  });
  const addData = accounts.data?.data.map(account => {
    const findUser = users.data?.data.find(user => user.id === account.user_id);
    account.user_name = findUser.user_name;
    return account;
  });
  // console.log(accounts.data.totalCount);
  // accounts.data.data = addData;
  // return { data: accounts };
  // const aa = {...accounts, data: addData };
  return { ...accounts, data: { ...accounts.data, data: addData } };
};

// const combineResults = <T extends object>(
//   data: UseQueryResult<T[], unknown>[]
// ): T[] =>
//   data.reduce((acc, curr) => {
//     if (!curr.data) return acc;

//     return [...acc, ...curr.data];
//   }, []);

// //my hook
// const useMyHook = (teams: TeamInfo[]) => {
//   const result = useQueries(
//     //Your queries here...
//   );

//   return {
//     data: combineResults<MyInterface>(result),
//     isLoading: result.some((query) => query.isLoading),
//     isFetching: result.some((query) => query.isFetching),
//   };
// };
// const useReactQuery = <DataType>({
//   key,
//   url,
//   method,
//   data: bodyData,
//   headers,
//   timeout,
//   enabled,
// }: UseReactQueryProps): UseQueryResult<DataType> => {
//   const useQueryResults = useQuery(
//     key,
//     () =>
//       Api({
//         url,
//         method,
//         data: bodyData,
//         headers,
//         timeout,
//       }),
//     { enabled }
//   );
//   return useQueryResults;
// };

export default useReactQueries;
