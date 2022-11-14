import * as S from '../styles/MainStyle';
import useMainService from '../hooks/useMainService';
import Aside from '../Layout/MainLayout/Aside';
import Heading from '../Layout/MainLayout/Heading';
import BankBoard from '../Layout/MainLayout/BankBoard';
import useUserService from '../hooks/useUserService';

const Main = () => {
  useMainService();
  useUserService();
  return (
    <S.MainLayout>
      <Aside />
      <S.MainRightArea>
        <Heading />
        <BankBoard />
      </S.MainRightArea>
    </S.MainLayout>
  );
};

export default Main;
