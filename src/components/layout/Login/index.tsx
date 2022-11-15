import React from 'react';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Login from './Login';

const LoginIndex = () => {
  const router = useRouter();

  const onSubmit = async (values: { email: string; password: string }) => {
    const response = await signIn('user-credential', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}/admin/accounts?page=1&limit=10`,
    });

    if (response.ok) {
      toast.success('로그인에 성공하였습니다.');
      await router.push(response.url);
    } else {
      toast.error('이메일 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <>
      <Login onSubmit={onSubmit} />
    </>
  );
};

export default LoginIndex;
