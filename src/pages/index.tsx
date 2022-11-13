import Login from '../components/common/login/Login';
import { Provider } from 'react-redux';
import * as S from '../styles/LoginStyle';
import store from '../redux/store';

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <S.LoginPageLayout>
          <Login />
        </S.LoginPageLayout>
      </Provider>
    </>
  );
}
