import { axiosInstance } from "./axiosInstance";
import type {  ICreateAccount,  IEditAccount, IForm } from "../types/interfaces";
import axios from "axios";
import cookie from 'react-cookies'

export const login  = async (data : IForm) => {
  const {data : loginData} =  await axiosInstance.post('/login', {
    email: data.email,
    password: data.password
  })
  const token = loginData.accessToken
    cookie.save('accessToken', `Bearer ${token}`, {
    path : '/',
  })
}

export const fetchAccount = async(page:number) => {
  const accessToken = cookie.load('accessToken')
  const response = await axiosInstance.get('/accounts',{
    params : {
      _page: page,
      _limit: 20,
    },
    headers: {
      Authorization: accessToken
    }
  })
  const totalData = response.headers['x-total-count']
  const accountData = response.data
  return {accountData, totalData }
}

export const fetchUser = async(page:number) => {
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

export const fetchAccountDetail = async(id : number)  : Promise<IEditAccount> => {
  const {data} = await axiosInstance.get(`/accounts/${id}`)
  return data
}

export const editAccount = async(id:number, data : IEditAccount):Promise<void> => {
  await axiosInstance.patch(`/accounts/${id}`,data,{
  })
}

export const deleteAccount = async(id : number) : Promise<void> => {
  await axiosInstance.delete(`/accounts/${id}`)
}

export const createAccount = async(data:ICreateAccount) : Promise<void> => {
  await axiosInstance.post(`/accounts/`,data)
}


export const fetchAccountsServer = async (page:any, active:any, broker : any, status : any, q : any,  token : string) => {
  const response = await axios.get('http://localhost:4000/accounts', {
    params: {
      _page: page,
      _limit: 20,
      is_active : active,
      broker_id :  broker,
      status : status,
      q: q
    },
    headers: {
      Authorization: token
    }
  })
  const totalData = response.headers['x-total-count']
  const accountData = response.data
  return {accountData, totalData}
}

export const fetchAccountsClient = async (page: any, active : any,  broker : any, status : any, q : any) => {
  const response = await axiosInstance.get('/accounts', {
    params: {
      _page: page,
      _limit: 20,
      is_active : active,
      broker_id :  broker,
      status : status,
      q: q
    },
  })
  const totalData = response.headers['x-total-count']
  const accountData = response.data
  return {accountData, totalData}
}

export const fetchAccountServer = async(id : number, token : string) : Promise<IEditAccount> => {
  const {data} = await axios.get(`http://localhost:4000/accounts/${id}`, {
    headers: {
      Authorization: token
    }
  })
  return data
}

export const fetchAccountClient = async(id : number) => {
  const {data} = await axiosInstance.get(`/accounts/${id}`,{
  })
  return data
}