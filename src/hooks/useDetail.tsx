import instance from '../api/AxiosInstance';
import { useQuery } from '@tanstack/react-query';

type detailData = {
  data: Data[];
};
interface Data {
  [key: string]: string | number;
}

export const getPostById = async (id: number): Promise<detailData> => {
  const { data } = await instance(`/accounts/${id}`);
  return data;
};

export const GetPost = (postId: number) => {
  return useQuery(['post', postId], () => getPostById(postId), {
    enabled: !!postId, //postId가 존재할 때만 실행
  });
};
