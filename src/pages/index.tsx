import Login from '../components/common/login/Login';
import * as S from '../styles/LoginStyle';

export default function Home() {
  return (
    <>
      <S.LoginPageLayout>
        <Login />
      </S.LoginPageLayout>
    </>
  );
}
