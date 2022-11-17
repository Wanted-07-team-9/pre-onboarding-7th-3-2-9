import React from 'react';

import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import { queriesState } from 'core/states';

const ActiveLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const router = useRouter();
  const resetState = useResetRecoilState(queriesState);

  const style = {
    color: router.route.replace('/[id]', '') === href ? '#f3f4f5' : '#69707b',
    textDecoration: 'none',
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href.includes('accounts')) {
      resetState();
    }
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default ActiveLink;
