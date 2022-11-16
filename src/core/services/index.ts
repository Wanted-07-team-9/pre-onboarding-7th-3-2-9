// import Router from 'next/router';
// import { signOut } from 'next-auth/react';
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
      toast.error('세션이 만료되었습니다.');
      // const data = await signOut({ redirect: false, callbackUrl: '/login' });

      // await Router.push(data.url);
    }
    return Promise.reject(error.response);
  }
);

export default AxiosRequest;
