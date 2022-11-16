import { useQueryClient } from '@tanstack/react-query';

export const useMutateAccount = ({ data, headers }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return AxiosRequest.patch(
        `/accounts/${router.query.id}`,
        {
          ...data,
        },
        {
          headers,
        }
      );
    },
    onSuccess: data => {
      queryClient.setQueryData(['account', router.query.id], oldData =>
        oldData
          ? {
              ...oldData,
              name: data.name,
            }
          : oldData
      );
    },
  });
};
