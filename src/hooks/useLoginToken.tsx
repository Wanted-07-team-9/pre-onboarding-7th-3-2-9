import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getTokenStorage } from '../utils/accessToken';

export const AdminRoute = () => {
  const router = useRouter();
  const token = getTokenStorage('login-token');

  useEffect(() => {
    if (!token) {
      router.replace('/');
    }
  }, [token]);
};
