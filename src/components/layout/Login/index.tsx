import React from 'react';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import styled from 'styled-components';

import Login from './Login';

const LoginIndex = () => {
  const router = useRouter();

  const onSubmit = async (values: { email: string; password: string }) => {
    const response = await signIn('user-credential', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}/admin/accounts`,
    });

    if (response.ok) {
      await router.push(response.url);
      toast.success('로그인에 성공하였습니다.');
    } else {
      toast.error('이메일 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <>
      <Login onSubmit={onSubmit} />
      <Copyright>Copyright © December and Company Inc.</Copyright>
    </>
  );
};

const Copyright = styled.p`
  font-size: 12px;
  color: #767676;
  text-align: center;
  margin-top: 1.8rem;
`;

export default LoginIndex;
