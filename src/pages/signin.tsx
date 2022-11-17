import { getAccountData } from './api/getAccountData';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== '' && !!token) {
      router.push('/');
    }
  }, []);

  const getInputValue = (event: any) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const onSignIn = () => {
    try {
      if (!!email && !!password) {
        getAccountData({ email, password });
        setTimeout(() => {
          const token = localStorage.getItem('token');
          if (token !== '' && !!token) {
            router.push('/');
          } else {
            router.reload();
          }
        }, 500);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h2>로그인</h2>
      <input type="text" name="email" onKeyUp={getInputValue} />
      <input type="text" name="password" onKeyUp={getInputValue} />
      <button onClick={onSignIn}>signin</button>
    </div>
  );
};

export default SignIn;
