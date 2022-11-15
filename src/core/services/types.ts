import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

// export interface Properties {
//   method: Method;
//   data?: any;
//   url: string;
//   timeout?: number;
//   headers?: AxiosRequestHeaders;
//   enabled?: boolean;
// }
// {queryKey, url, headers, params, enabled}
export interface UseReactQueriesProps {
  queryKey: string[];
  url: string;
  headers: AxiosRequestHeaders;
  params?: AxiosRequestConfig;
  enabled: boolean;
}

// key,
// url,
// method,
// data: bodyData,
// headers,
// timeout,
// enabled,
