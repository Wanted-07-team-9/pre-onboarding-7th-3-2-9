import { loginForm } from "../types/authType"
import axiosInstance from './axiosInstance';

export const authAPI = {
    login : async ({email,password} : loginForm)=>{
        const res = await axiosInstance.post("login",{email,password})

        return res
    }
}