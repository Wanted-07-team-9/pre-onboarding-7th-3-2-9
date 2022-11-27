import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import cookie from 'react-cookies'

export const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig<any>) {
    const token = cookie.load('accessToken')
    if (token) {
      config.headers!.Authorization =token
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);