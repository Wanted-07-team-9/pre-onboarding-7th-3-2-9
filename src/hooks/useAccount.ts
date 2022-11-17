import { useQueries } from '@tanstack/react-query';
import { userAPI } from './../api/userAPI';
import { accountAPI } from './../api/accountAPI';

export const useAccount = (page:number)=>{
 
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

      return [userData,accountData]
}