import instance from '../api/AxiosInstance';
import { useQuery } from '@tanstack/react-query';

function useUserService() {
  type userData = {
    data: Data[];
  };
  interface Data {
    [key: string]: string | number;
  }

  const getUserAxios = async () => {
    const { data } = await instance.get('/users');
    return data;
  };
  const { data, error, isLoading } = useQuery<userData, Error>(['usersData'], getUserAxios);

  const usersData = data;

  return { usersData, error, isLoading };
}
export default useUserService;
