import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  //const [auth, setAuth] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
    }
    axios
      .get('/accounts', { headers: { Authorization: token } })
      .then(res => console.log(res.data));
  }, []);

  return <h1>마지막 과제도 파이팅 하세용</h1>;
}
