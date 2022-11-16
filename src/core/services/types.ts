import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export interface UseReactQueriesProps {
  queryKey: string[];
  url: string;
  headers: AxiosRequestHeaders;
  params?: AxiosRequestConfig;
  enabled: boolean;
}
