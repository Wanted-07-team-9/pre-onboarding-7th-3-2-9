import axiosInstance from './axiosInstance';

export const accountAPI = {
  getList: async (page: number = 1) => {
    const res = await axiosInstance.get(`/accounts?_page=${page}&_limit=10`);
    return res;
  },

  getInfo: async (id: number, user_id: number) => {
    const res = await axiosInstance.get(`/accounts?id=${id}&user_id=${user_id}`);
    return res;
  },
};
