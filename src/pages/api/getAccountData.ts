import axios from 'axios';

export const getAccountData = async (user: any) => {
  axios.post('/login', user).then(res => {
    const { status, data } = res;
    try {
      if (status === 200) {
        localStorage.setItem('token', `Bearer ${data.accessToken}`);
        return data;
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    }
  });
};
