import React from 'react';

import styled from 'styled-components';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledWrap>
      <Sidebar />
      <StyledContents>
        <Header />
        <MainLayout>{children}</MainLayout>
        <Footer />
      </StyledContents>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const StyledContents = styled.div`
  width: calc(100% - 230px);
  height: 100%;
`;
const MainLayout = styled.main`
  width: 100%;
  height: calc(100% - 72px);
  padding-top: 72px;
`;
export default Layout;
