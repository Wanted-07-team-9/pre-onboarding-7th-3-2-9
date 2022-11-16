import { useQuery } from '@tanstack/react-query';

import AxiosRequest from 'core/services';
import { UseReactQueriesProps } from '../types';
// export interface UseReactQueriesProps {
//   queryKey: string[];
//   url: string;
//   headers: AxiosRequestHeaders;
//   params?: AxiosRequestConfig;
//   enabled: boolean;
// }

const useReactQuery = ({ queryKey, url, headers, enabled }: UseReactQueriesProps) => {
  const useQueryResults = useQuery(
    queryKey,
    async () => {
      const { data } = await AxiosRequest.get(url, {
        headers,
      });
      const { data: userData } = await AxiosRequest.get(`/users/${data.user_id}`, {
        headers,
      });
      const mergeData = { ...data, user_name: userData.name };
      return mergeData;
    },
    { enabled }
  );
  return useQueryResults;
};

export default useReactQuery;
