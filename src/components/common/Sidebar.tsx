import React from 'react';
import Router from 'next/router';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import styled from 'styled-components';
import toast from 'react-hot-toast';

import LogoImage from 'assets/logo.png';
import ActiveLink from 'components/blocks/ActiveLink';
import { SIDER } from 'utils/DataEnum';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

const getSideIcon = (id: number) => {
  switch (id) {
    case 1:
      return <SpeedOutlinedIcon />;
    case 2:
      return <AccountBalanceOutlinedIcon />;
    case 3:
      return <PersonOutlineRoundedIcon />;
    case 9999:
      return <PowerSettingsNewRoundedIcon />;
    default:
      return <></>;
  }
};

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
          {SIDER.map(side => {
            return side.id === 9999 ? (
              <a key={side.id} onClick={onSignOut}>
                <li>
                  <span>{getSideIcon(side.id)}</span>
                  <span>{side.name}</span>
                </li>
              </a>
            ) : (
              <ActiveLink key={side.id} href={`/admin/${side.keyword}`}>
                <li>
                  <span>{getSideIcon(side.id)}</span>
                  <span>{side.name}</span>
                </li>
              </ActiveLink>
            );
          })}
        </ul>
      </SideNav>
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
      color: #69707b;
      text-decoration: none;
      cursor: pointer;
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
