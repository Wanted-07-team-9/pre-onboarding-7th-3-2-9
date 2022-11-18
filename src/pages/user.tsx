import React from 'react';
import useUserService from '../hooks/useUserService';
import useMainService from '../hooks/useMainService';
import * as S from '../styles/MainStyle';
import Aside from '../Layout/BankLayout/Aside';
import Heading from '../Layout/BankLayout/Heading';
import UserBoard from '../Layout/UserLayout/UserBoard';
import useUserSettingService from '../hooks/useUserSettingService';
import { AdminRoute } from '../hooks/useLoginToken';

const User = () => {
  useUserService();
  useMainService();
  useUserSettingService();
  AdminRoute();
  return (
    <S.MainLayout>
      <Aside />
      <S.MainRightArea>
        <Heading />
        <UserBoard />
      </S.MainRightArea>
    </S.MainLayout>
  );
};

export default User;
