import React from 'react';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import styled from 'styled-components';

import Login from './Login';

const LoginIndex = () => {
  const router = useRouter();

  const onSubmit = async (values: { email: string; password: string }) => {
    const toastId = toast.loading('로그인중...');
    const response = await signIn('user-credential', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}/admin/accounts`,
    });
    if (response.ok) {
      toast.success('로그인 성공!', {
        id: toastId,
      });
      await router.push(response.url);
    } else {
      toast.error('이메일 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <>
      <LoginDiv>
        <Login onSubmit={onSubmit} />
        <Copyright>Copyright © December and Company Inc.</Copyright>
        <ResponsiveLabel>
          본 사이트는 1920 X 1080 해상도 PC 사용에 최적화 되어 있습니다.
        </ResponsiveLabel>
      </LoginDiv>
    </>
  );
};
const LoginDiv = styled.div`
  padding-top: 1px;
`;
const Copyright = styled.p`
  font-size: 12px;
  color: #767676;
  text-align: center;
  margin-top: 1.8rem;
`;
const ResponsiveLabel = styled.p`
  font-size: 12px;
  color: #767676;
  text-align: center;
  margin-top: 1.8rem;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default LoginIndex;
