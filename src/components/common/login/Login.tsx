import * as S from '../../../styles/LoginStyle';
import instance from '../../../api/AxiosInstance';
import { setTokenStorage } from '../../../utils/accessToken';
import Image from 'next/image';
import UserIcon from '../../../assets/UserIcon.svg';
import PassIcon from '../../../assets/passwordIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../redux/reducer/hook';
import { loginAccount } from '../../../redux/reducer/loginSlice';
import React from 'react';
import { useRouter } from 'next/router';

function Login() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.loginData);
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(loginAccount({ ...user, [name]: value }));
  };

  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (user) {
        const res = await instance.post('/login', user);
        console.log(res);
        setTokenStorage(res.data.accessToken);
      }
    } catch (error) {
      alert(error);
    } finally {
      router.push('/main');
    }
  };

  return (
    <S.LoinBox>
      <S.LoginTio>
        <Image src={UserIcon} alt="login-icon" width={30} height={30} />
        로그인
      </S.LoginTio>
      <S.LoginForm onSubmit={loginSubmit}>
        <label htmlFor="user-email">
          <Image src={UserIcon} alt="user-icon" width={30} height={30} />
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해 주세요"
            onChange={onChange}
          />
        </label>
        <label htmlFor="user-password">
          <Image src={PassIcon} alt="password icon" width={30} height={30} />
          <input
            type="password"
            name="password"
            onChange={onChange}
            minLength={4}
            placeholder="비밀번호를 입력해 주세요"
          />
        </label>
        <button type="submit"> 로그인 </button>
      </S.LoginForm>
    </S.LoinBox>
  );
}

export default Login;
