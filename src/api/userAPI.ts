import axiosInstance from './axiosInstance';

export const userAPI = {
  getUser: async () => {
    const res = await axiosInstance.get(`/users`);
    return res;
  },
  getUserById: async (user_id: number | string) => {
    const res = await axiosInstance.get(`/users?id=${user_id}`);
    return res;
  },
};
