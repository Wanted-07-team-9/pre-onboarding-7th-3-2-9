import { useQueries } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';
import instance from '../api/AxiosInstance';

export interface UseReactQueriesProps {
  queryKey: string[];
  url: string;
  params?: AxiosRequestConfig;
  enabled: boolean;
}

const useReactQueries = (queries: UseReactQueriesProps[]) => {
  const [accounts, users] = useQueries({
    queries: queries.map(item => ({
      queryKey: item.queryKey,
      queryFn: async () => {
        const { headers, data } = await instance.get(item.url, {
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
          return { ...data, data: data.data.map(user => ({ id: user.id, user_name: user.name })) };
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

  return { ...accounts, data: { ...accounts.data, data: addData } };
};

export default useReactQueries;
