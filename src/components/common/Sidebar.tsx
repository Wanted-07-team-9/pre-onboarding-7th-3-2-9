import React from 'react';
import Router from 'next/router';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import styled from 'styled-components';
import toast from 'react-hot-toast';

import LogoImage from 'assets/logo.png';
import ActiveLink from 'components/blocks/ActiveLink';

const Sidebar = () => {
  const onSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/login' });
    toast.success('성공적으로 로그아웃 되었습니다.');

    await Router.push(data.url);
  };

  return (
    <StyledSidebar>
      <Logo>
        <div>
          <span className="logo_image">
            <Image src={LogoImage} alt="Logo" placeholder="blur" width={41} height={41} />
          </span>
          <span>PREFACE</span>
        </div>
      </Logo>
      <SideNav>
        <ul>
          <ActiveLink href={'account'}>
            <li>
              <span>{/* <DashIcon /> */}</span>
              <span>계좌 목록</span>
            </li>
          </ActiveLink>
          <ActiveLink href={'user'}>
            <li>
              <span>{/* <AdIcon /> */}</span>
              <span>사용자</span>
            </li>
          </ActiveLink>
        </ul>
      </SideNav>
      <button type="button" onClick={onSignOut}>
        SignOut
      </button>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  width: 230px;
  height: 100%;

  background-color: #041527;
`;

const Logo = styled.header`
  height: 72px;

  div {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    > span {
      border-radius: 10px;
      margin: 0 15px;
    }
    span.logo_image {
      width: 52px;
      height: 52px;
      padding: 5px;

      background-color: #091c3f;
    }
  }
`;
const SideNav = styled.nav`
  ul {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  li {
    padding: 20px 22px;
    font-weight: bold;

    span:first-child {
      vertical-align: middle;
      margin-right: 12px;
    }
  }
`;
export default Sidebar;
