import React from 'react';

import { signIn } from 'next-auth/react';
import Router from 'next/router';
import toast from 'react-hot-toast';

import Login from './Login';

const LoginIndex = () => {
  const onSubmit = async (values: { email: string; password: string }) => {
    const response = await signIn('user-credential', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}/admin/account`,
    });

    if (response.ok) {
      toast.success('로그인에 성공하였습니다.');
      await Router.push(response.url);
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
