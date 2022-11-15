import Router from 'next/router';
import { signOut } from 'next-auth/react';
import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = process.env.NEXT_PUBLIC_URL;

const AxiosRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

AxiosRequest.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
AxiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      const data = await signOut({ redirect: false, callbackUrl: '/login' });
      toast.error('세션이 만료되어 로그인 화면으로 이동합니다.');

      await Router.push(data.url);
    }
    return Promise.reject(error.response);
  }
);

// const AxiosInstance = axios.create({
//   baseURL: BASE_URL,
//   timeout: 5000,
// });

// AxiosInstance.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error.response);
//   }
// );
// AxiosInstance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return Promise.reject(error.response);
//   }
// );

export default AxiosRequest;
