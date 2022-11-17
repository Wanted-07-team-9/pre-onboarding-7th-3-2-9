import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IMutateData, UseMutateAccount } from '../types';
import AxiosRequest from '../index';

export const useMutateAccount = ({ method, id, config }: UseMutateAccount) => {
  const queryClient = useQueryClient();
  const url = id ? `/accounts/${id}` : '/accounts';

  return useMutation({
    mutationFn: (data: IMutateData) => {
      return AxiosRequest({ method: method, url: url, headers: config.headers, data });
    },
    onSuccess: () => {
      if (method === 'patch') {
        queryClient.invalidateQueries(['account', id]);
      } else {
        queryClient.invalidateQueries(['accounts']);
      }
    },
  });
};
