import * as S from '../styles/MainStyle';
import Aside from '../Layout/BankLayout/Aside';
import Heading from '../Layout/BankLayout/Heading';

function dash() {
  return (
    <S.MainLayout>
      <Aside />
      <S.MainRightArea>
        <Heading />
      </S.MainRightArea>
    </S.MainLayout>
  );
}

export default dash;
