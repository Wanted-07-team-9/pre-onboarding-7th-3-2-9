import React, { useEffect } from 'react';

import toast from 'react-hot-toast';

const DashboardPage = () => {
  useEffect(() => {
    toast('준비중입니다.', {
      icon: '🚧',
    });
  }, []);

  return <>Hello, Dashboard Page.</>;
};

export default DashboardPage;
