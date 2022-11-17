import { AxiosRequestConfig } from 'axios';

export interface UseMutateAccount {
  method: string;
  id?: number;
  config: AxiosRequestConfig;
}

export interface UseAccountsQueriesProps {
  queryKey: (string | number)[];
  url: string;
  config: AxiosRequestConfig;
  enabled: boolean;
}

export interface IAccountFilter {
  broker: string;
  active: string;
  status: string;
  q: string;
}

export interface IAccountFilterParams {
  _page: string | string[];
  _limit: string | string[];
  status: string | string[];
  q: string;
}
export interface IMutateData {
  id?: number;
  name?: string;
  user_id?: number | string;
  uuid?: string;
  broker_id?: string;
  status?: number;
  number?: string;
  assets?: string;
  payments?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}
export interface IAccountData {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: string;
  created_at: string;
  updated_at: string;
  user_name: string;
}
export interface IUserData {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}
