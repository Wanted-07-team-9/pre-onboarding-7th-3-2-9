import { useQuery } from '@tanstack/react-query';
import instance from '../api/AxiosInstance';

function useMainService() {
  type mainData = {
    data: Data[];
  };
  interface Data {
    [key: string]: string | number;
  }
  const getMainAxios = async () => {
    const { data } = await instance.get('/accounts');
    return data;
  };

  const { data, error, isLoading } = useQuery<mainData, Error>(['accountsData'], getMainAxios);

  const accountData = data;

  return { accountData, error, isLoading };
}

export default useMainService;
