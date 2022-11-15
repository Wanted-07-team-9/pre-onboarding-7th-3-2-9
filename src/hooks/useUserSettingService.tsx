import { useEffect } from 'react';
import instance from '../api/AxiosInstance';
import { getTokenStorage } from '../utils/accessToken';
import { setUserSetting } from '../redux/reducer/bankSlice';
import { useAppDispatch } from '../redux/reducer/hook';

function useUserSettingService() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessCheck = async () => {
      if (getTokenStorage('login-token')) {
        const userSettingRes = await instance.get('/userSetting');
        dispatch(setUserSetting(userSettingRes.data));
      } else {
        alert('서버를 확인해 주세요');
      }
    };
    accessCheck();
  }, [dispatch, setUserSetting]);
}

export default useUserSettingService;
