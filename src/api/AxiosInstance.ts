import axios, { AxiosRequestConfig } from 'axios';
import { getTokenStorage } from '../utils/accessToken';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const accessToken = getTokenStorage('login-token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ` + accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
