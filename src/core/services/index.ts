import axios from 'axios';

const BASE_URL = 'https://wanted-3-2-9-json-server.herokuapp.com';

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
  error => {
    return Promise.reject(error.response);
  }
);

export default AxiosRequest;
