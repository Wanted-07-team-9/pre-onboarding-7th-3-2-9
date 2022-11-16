import { axiosInstance } from "./axiosInstance";
import { IForm } from "../types/interfaces";

export const login  = async (data : IForm) => {
  const {data : loginData} =  await axiosInstance.post('/login', {
    email: data.email,
    password: data.password
  })
  const token = loginData.accessToken
  if(typeof window !== 'undefined') {
    sessionStorage.setItem('token', `Bearer ${token}`)
  }
}

export const fetchAccount = async(page:any) => {
  console.log(page,'api')
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
