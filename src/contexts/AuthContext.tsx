import React, { createContext, useContext, useEffect, useState } from 'react';
import { adminUser, loginForm } from '../types/authType';
import axiosInstance from './../api/axiosInstance';
import { useRouter } from 'next/router';
import { useAuthMutaion } from './../hooks/useAuthMutaion';
import { TokenRepositoryImpl } from './../repository/tokenRepositiory';
type authState = {
  user: adminUser | undefined;
  login: ({ email, password }: loginForm) => void;
  logout: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
  tokenRepository: TokenRepositoryImpl;
};

const AuthContext = createContext<authState | null>(null);

export const useAuth = () => {
  const state = useContext(AuthContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
};

export function AuthProvider({ children, tokenRepository }: ProviderProps) {
  const [user, setUser] = useState<adminUser>();

  const loginMutation = useAuthMutaion();

  const router = useRouter();

  useEffect(() => {
    const token = tokenRepository.get();
    if (token) {
      setUser({
        accessToken: token,
      });
      axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [tokenRepository]);

  const login = async ({ email, password }: loginForm) => {
    const response = await loginMutation.mutateAsync({ email, password });
    const { status } = response;
    if (status !== 200) {
      alert(response.statusText);
      console.warn(response.data);
    } else {
      const user: adminUser = response.data;
      setUser(user);
      tokenRepository.save(user.accessToken);
      axiosInstance.defaults.headers.Authorization = `Bearer ${user.accessToken}`;
      router.push('/AccountList');
    }
  };

  const logout = () => {
    setUser(undefined);
    tokenRepository.remove();
    axiosInstance.defaults.headers.Authorization = '';
    router.push('/');
  };

  const state = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
