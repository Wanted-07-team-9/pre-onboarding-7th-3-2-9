import React from 'react';
import Router from 'next/router';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import { useRecoilValue } from 'recoil';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faBuildingColumns, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import LogoImage from 'assets/logo.png';
import ActiveLink from 'components/blocks/ActiveLink';
import { sideState } from 'core/states';
import { SIDER } from 'utils/DataEnum';

const getSideIcon = (id: number) => {
  switch (id) {
    case 1:
      return <FontAwesomeIcon icon={faGauge} />;
    case 2:
      return <FontAwesomeIcon icon={faBuildingColumns} />;
    case 3:
      return <FontAwesomeIcon icon={faUser} />;
    case 9999:
      return <FontAwesomeIcon icon={faPowerOff} />;
    default:
      return <></>;
  }
};

const Sidebar = () => {
  const open = useRecoilValue(sideState);

  const onSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/login' });

    await Router.push(data.url);
    toast.success('로그아웃 되었습니다.');
  };

  return (
    <StyledSidebar open={open}>
      <Logo>
        <div>
          <span className="logo_image">
            <Image src={LogoImage} alt="Logo" placeholder="blur" width={41} height={41} />
          </span>
          <StyledTitleSpan open={open}>PREFACE</StyledTitleSpan>
        </div>
      </Logo>
      <SideNav>
        <ul>
          {SIDER.map(side => {
            return side.id === 9999 ? (
              <a key={side.id} onClick={onSignOut}>
                <li>
                  <span>{getSideIcon(side.id)}</span>
                  <StyledTextSpan open={open}>{side.name}</StyledTextSpan>
                </li>
              </a>
            ) : (
              <ActiveLink key={side.id} href={`/admin/${side.keyword}`}>
                <li>
                  <span>{getSideIcon(side.id)}</span>
                  <StyledTextSpan open={open}>{side.name}</StyledTextSpan>
                </li>
              </ActiveLink>
            );
          })}
        </ul>
      </SideNav>
    </StyledSidebar>
  );
};

interface ISidebar {
  open: boolean;
}
const StyledSidebar = styled.aside<ISidebar>`
  height: 100%;
  width: ${({ open }) => (open ? '230px' : '65px')};
  background-color: #041527;
  transition: width ease 0.5s 0s;
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
      padding: 5px;

      background-color: #091c3f;
    }
  }
`;
const StyledTitleSpan = styled.span<ISidebar>`
  display: ${({ open }) => (open ? 'block' : 'none')};
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
    white-space: nowrap;
    overflow: hidden;
    padding: 20px 22px;
    font-weight: bold;

    span:first-child {
      vertical-align: middle;
      margin-right: 12px;
    }
  }
`;
const StyledTextSpan = styled.span<ISidebar>`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.5s;
`;
export default Sidebar;
