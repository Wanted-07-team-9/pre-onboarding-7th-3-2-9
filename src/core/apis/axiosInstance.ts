import axios from 'axios';

const BASE_URL = 'http://localhost:4000/'

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

Axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default Axios;
