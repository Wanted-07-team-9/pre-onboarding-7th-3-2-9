import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { MdMenuOpen, MdMenu } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';

type HeaderProps = {
  show: boolean;
  setShow: (boolBal: boolean) => void;
};

type buttonType = 'open' | 'close';

const Header = ({ show, setShow }: HeaderProps) => {
  return (
    <HeaderBlock>
      <LeftHeaderMenuBlock>
        <MenuHandleButton show={show} buttonType="open" onClick={() => setShow(true)}>
          <MdMenu />
        </MenuHandleButton>
        <MenuHandleButton show={show} buttonType="close" onClick={() => setShow(false)}>
          <MdMenuOpen />
        </MenuHandleButton>
        <div className="font-medium text-xl"> Title</div>
      </LeftHeaderMenuBlock>
      <RightHeaderMenuBlock>
        <BsBell />
        <div className="w-12 h-12 flex items-center justify-center bg-gray-200">Jun</div>
      </RightHeaderMenuBlock>
    </HeaderBlock>
  );
};

const HeaderBlock = tw.div`
flex 
justify-between 
absolute
top-0

w-full 

bg-white 
shadow-lg 
p-6 
items-center 
h-20`;

const LeftHeaderMenuBlock = tw.div`
flex 
justify-center 
items-center 
space-x-4
`;

const RightHeaderMenuBlock = tw.div`
flex 
items-center 
text-xl 
space-x-4
`;

const MenuHandleButton = styled.button(
  ({ show, buttonType }: { show: boolean; buttonType: buttonType }) => {
    if (buttonType === 'open') return [show ? tw`hidden` : tw``, tw`text-3xl`];
    else if (buttonType === 'close') return [show ? tw`` : tw`hidden`, tw`text-3xl`];
  }
);

export default Header;
