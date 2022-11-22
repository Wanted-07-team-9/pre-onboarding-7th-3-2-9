import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig<any>) {
    const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;
    if (accessToken) {
      config.headers!.Authorization =accessToken
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);