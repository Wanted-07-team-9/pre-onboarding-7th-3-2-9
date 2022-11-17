import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from 'axios';
import { accountType, mergedAccountType } from "../../types/accountType";
import { userType } from "../../types/userType";
import { ACCOUNT_STATUS_TABLE, BROKERS_TABLE } from "./accountObj";
import { convertAssest, convertDate } from '../convert';
import { convertAccountNumber } from '../convert';

export const accountMerged = (
  userData:UseQueryResult<AxiosResponse>
  ,accounData:UseQueryResult<AxiosResponse>
  ) => {
    const userList = userData.data?.data;
    const accountLIst = accounData.data?.data;
    const accountHeader = accounData.data?.headers;

    const mergedData:mergedAccountType[] = accountLIst?.map((account: accountType) => {

      const userData :userType= userList?.find((user: userType) => account.user_id === user.id);
        return {
            ...account,
            userName: userData.name,
            broker_id:ACCOUNT_STATUS_TABLE[account.broker_id],
            status:BROKERS_TABLE[(account.status)],
            is_active :account.is_active? "활성" :"비활성", // FIX.. bool값에 따라 따로 처리.
            created_at:convertDate( account.created_at),
            payments:convertAssest(account.payments),
            assets:convertAssest(account.assets),
            number:convertAccountNumber(account.broker_id,account.number),
            user_id:userData.id,
          };
    });

  return {
      count : accountHeader!['x-total-count'],
      mergedData: mergedData
  };
};
