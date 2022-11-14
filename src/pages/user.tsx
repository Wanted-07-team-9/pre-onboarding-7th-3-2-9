import React from 'react';
import useUserService from '../hooks/useUserService';
import * as S from '../styles/MainStyle';
import Aside from '../Layout/MainLayout/Aside';
import Heading from '../Layout/MainLayout/Heading';

const User = () => {
  useUserService();

  return (
    <S.MainLayout>
      <Aside />
      <S.MainRightArea>
        <Heading />
      </S.MainRightArea>
    </S.MainLayout>
  );
};

export default User;
