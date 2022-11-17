import { useQuery } from '@tanstack/react-query';

import AxiosRequest from 'core/services';
import { UseAccountsQueriesProps } from '../types';

const useAccountQuery = ({ queryKey, url, config, enabled }: UseAccountsQueriesProps) => {
  const useQueryResults = useQuery(
    queryKey,
    async () => {
      const { data } = await AxiosRequest.get(url, config);
      const { data: userData } = await AxiosRequest.get(`/users/${data.user_id}`, config);
      const mergeData = { ...data, user_name: userData.name };
      return mergeData;
    },
    { enabled }
  );
  return useQueryResults;
};

export default useAccountQuery;
