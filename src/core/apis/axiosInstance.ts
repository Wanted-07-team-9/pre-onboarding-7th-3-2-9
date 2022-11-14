import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

AxiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default AxiosInstance;
