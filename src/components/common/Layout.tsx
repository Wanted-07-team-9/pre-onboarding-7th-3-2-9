import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';
import tw, { styled } from 'twin.macro';

type LaytoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LaytoutProps) => {
  const [show, setShow] = useState(false);

  return (
    <LayoutWraaper>
      <SlideBarWrapper show={show}>
        <SideBar />
      </SlideBarWrapper>

      <MainWrapper show={show}>
        <Header setShow={setShow} show={show} />
        <ContentsWrapper>{children}</ContentsWrapper>
        <Footer />
      </MainWrapper>
    </LayoutWraaper>
  );
};

const LayoutWraaper = tw.div`
flex 
relative 
w-full 
h-screen 
bg-slate-100 
overflow-y-hidden 
`;

const ContentsWrapper = tw.div`
flex 
justify-center 
items-center 
flex-col 
max-h-[65vh]
z-10
`;

const SlideBarWrapper = styled.div(({ show }: { show: boolean }) => [
  show ? tw`translate-x-0 ` : tw`-translate-x-full`,
  tw`
  transform 
  ease-in-out 
  transition 
  duration-500 
  flex 
  h-full 
  absolute 
  left-0 
  z-[9999]
`,
]);

const MainWrapper = styled.div(({ show }: { show: boolean }) => [
  show ? tw`translate-x-[256px] ` : tw`translate-x-0`,
  tw`
  transform 
  ease-in-out 
  transition 
  duration-500

  flex 
  flex-col 
  w-full 
  justify-center 
  min-h-screen 
  h-fit

  absolute
`,
]);

export default Layout;
