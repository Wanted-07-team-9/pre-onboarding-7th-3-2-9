import React from 'react';

import { useRouter } from 'next/router';

function ActiveLink({ children, href }: { children: React.ReactNode; href: string }) {
  const router = useRouter();
  const style = {
    color: router.asPath.replace('/admin/', '') === href ? '#ff0000' : '#fff',
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
