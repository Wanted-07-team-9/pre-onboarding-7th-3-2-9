import { useEffect } from 'react';
import instance from '../api/AxiosInstance';
import { getTokenStorage } from '../utils/accessToken';
import { setBankData } from '../redux/reducer/bankSlice';
import { useAppDispatch } from '../redux/reducer/hook';
function useUserService() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessCheck = async () => {
      if (getTokenStorage('login-token')) {
        const res = await instance.get('/accounts');
        dispatch(setBankData(res.data));
        // console.log(res.data);
      } else {
        alert('토근 없음');
      }
    };
    accessCheck();
  }, [dispatch]);
}

export default useUserService;
