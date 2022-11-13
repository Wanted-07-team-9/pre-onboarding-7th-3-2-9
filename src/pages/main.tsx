import React, { useEffect } from 'react';
import instance from '../api/AxiosInstance';
import { getTokenStorage } from '../utils/accessToken';
function Main() {
  useEffect(() => {
    const accessCheck = async () => {
      if (getTokenStorage('login-token')) {
        const res = await instance.get('/accounts');
        console.log(res.data);
      } else {
        alert('토근 없음');
      }
    };
    accessCheck();
  }, []);

  return <div>main</div>;
}

export default Main;
