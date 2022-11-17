import axiosInstance from './axiosInstance';

export const userAPI = {
    getUser : async ()=>{
        const res = await axiosInstance.get(`/users`)
        return res
    }
}