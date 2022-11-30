import { axiosInstance } from "./axiosInstance";
import type {  ICreateAccount,  IEditAccount, IForm } from "../types/interfaces";
import axios from "axios";
import cookie from 'react-cookies'
import { Flip, toast } from "react-toastify";

export const login  = async (data : IForm) => {
  try{
    const response =  await axiosInstance.post('/login', {
      email: data.email,
      password: data.password
    })
    if(response.status===200){
      const {data : loginData} = response
      const token = loginData.accessToken
      cookie.save('accessToken', `Bearer ${token}`, {
      path : '/',
    })
    toast.success('로그인 성공',{
      hideProgressBar: true,
      draggable:false,
      transition:Flip
    })
    return true
    }
  }catch(e){
    toast.info('회원정보를 확인해주세요',{
      draggable:false,
      transition:Flip
    })
    return  false
  }
}

export const fetchUserListClient = async(page:string | string[] |null) => {
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

export const fetchUserListServer = async(page:string | string[] | number , token:string | undefined) => {
  const response= await axios.get('https://wanted-3-2-9-json-server.herokuapp.com/users',{
    params : {
      _page: page,
      _limit: 20,
    },
    headers: {
      Authorization: token
    }
  })
  const totalData = response.headers['x-total-count']
  const userData = response.data
  return {userData, totalData}
}

export const fetchUserServer = async (token:string | undefined) => {
  const {data} = await axios.get('https://wanted-3-2-9-json-server.herokuapp.com/users', {
    headers: {
      Authorization: token
    }
  })
  return data
}

export const fetchUserClient = async () => {
  const {data} = await axiosInstance.get('/users')
  return data
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

export const fetchAccountsServer = async (page:string | string[], active:string | string[] | null, broker : string | string[] | null, status : string | string[] | null, q : string | string[] | null,  token : string | undefined) => {
  const response = await axios.get('https://wanted-3-2-9-json-server.herokuapp.com/accounts', {
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

export const fetchAccountsClient = async (page:string | string[] |null, active : string | string[] |null,  broker : string | string[] |null, status : string | string[] |null, q : string | string[] |null)  => {
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

export const fetchAccountServer = async(id : string | string[] | undefined, token : string | undefined) : Promise<IEditAccount> => {
  const {data} = await axios.get(`https://wanted-3-2-9-json-server.herokuapp.com/accounts/${id}`, {
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