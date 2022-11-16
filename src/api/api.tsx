
import axios, { AxiosRequestConfig } from 'axios';
import { IForm } from "../types/interfaces";

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
      config.headers.Authorization =accessToken
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export const login  = async (data : IForm) => {
  const {data : loginData} =  await axios.post('/login', {
    email: data.email,
    password: data.password
  })
  const token = loginData.accessToken
  if(typeof window !== 'undefined') {
    sessionStorage.setItem('token', `Bearer ${token}`)
  }
}

export const fetchAccount = async(page:any) => {
  const response = await axiosInstance.get('/accounts',{
    params : {
      _page: page,
      _limit: 20,
    }
  })
  const totalData = response.headers['x-total-count']
  const accountData = response.data
  return {accountData, totalData }
}

export const fetchUser = async(page:any) => {
  const response= await axiosInstance.get('/users',{
    params : {
      _page: page,
      _limit: 20,
    }
  })
  const totalData = response.headers['x-total-count']
  const userData = response.data
  return {userData, totalData}
}

export const fetchAccountDetail = async(id? : any)  : Promise<any> => {
  const {data} = await axiosInstance.get(`/accounts/${id}`)
  return data
}

export const editAccount = async(id, data) => {
  const response = await axiosInstance.patch(`/accounts/${id}`,data)
  console.log(response)
}
