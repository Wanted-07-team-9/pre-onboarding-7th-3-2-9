import { useQueries, useQuery } from '@tanstack/react-query';
import { userAPI } from '../api/userAPI';
import { accountAPI } from '../api/accountAPI';
import { userType } from '../types/userType';
import { accountType } from '../types/accountType';
import { UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useAccountList = (page: number) => {
  const queryData = useQueries({
    queries: [
      { queryKey: ['userList'], queryFn: userAPI.getUser, staleTime: 1000 * 60 },
      {
        queryKey: ['AccountList', page],
        queryFn: () => accountAPI.getList(page),
        staleTime: 1000 * 60,
      },
    ],
  });
  const [userData, accountData] = queryData;

  return [userData, accountData];
};

export const useAccountInfo = (
  id: number,
  user_id: number
): [isLoading: boolean, isError: boolean, accountData: accountType, userData: userType] => {
  const queryData = useQueries({
    queries: [
      {
        queryKey: ['userList', user_id],
        queryFn: () => userAPI.getUserById(user_id),
        staleTime: 1000 * 60 * 60,
      },
      {
        queryKey: ['accountInfo', id, user_id],
        queryFn: () => accountAPI.getInfo(id, user_id),
        staleTime: 1000 * 60 * 60,
      },
    ],
  });

  const [userDataArr, accountDataArr] = queryData;
  const isLoading = userDataArr.isLoading && accountDataArr.isLoading;
  const isError = userDataArr.isError && accountDataArr.isError;
  const accountData = accountDataArr.data?.data[0];
  const userData = userDataArr.data?.data[0];

  return [isLoading, isError, accountData, userData];
};
