// import { useQuery } from '@tanstack/react-query';
import { UseReactQueriesProps } from '../types';

const useReactQuery = ({ queryKey, url, headers, params, enabled }: UseReactQueriesProps) => {
  console.log(queryKey, url, headers, params, enabled);
  // const useQueryResults = useQuery(
  //   queryKey,
  //   async () =>
  //     getMergeTest(page, limit, accessToken),
  //   { enabled }
  // );
  // return useQueryResults;
};

export default useReactQuery;
