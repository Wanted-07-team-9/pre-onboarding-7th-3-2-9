import { useQueries } from '@tanstack/react-query';

import AxiosRequest from 'core/services';
import { UseAccountsQueriesProps } from '../types';

const useAccountsQueries = (queries: UseAccountsQueriesProps[]) => {
  const [accounts, users] = useQueries({
    queries: queries.map(item => ({
      queryKey: item.queryKey,
      queryFn: async () => {
        const { headers, data } = await AxiosRequest.get(item.url, item.config);
        const mergedData = {
          totalCount: +headers['x-total-count'] || 0,
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
    const findUser = users.data?.data.find(user => user.id === +account.user_id);
    account.user_name = findUser?.user_name;
    return account;
  });
  return { ...accounts, data: { ...accounts.data, data: addData } };
};

export default useAccountsQueries;
