import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const UserIndex = () => {
  useEffect(() => {
    toast('준비중입니다.', {
      icon: '🚧',
    });
  }, []);

  return <>Hello, Users Page</>;
};

export default UserIndex;
