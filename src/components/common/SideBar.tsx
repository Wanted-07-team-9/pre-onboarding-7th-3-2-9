import React, { useState } from 'react';
import { AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { IoIosArrowUp } from 'react-icons/io';
import { BsBank, BsGraphUp, BsBell } from 'react-icons/bs';
import Image from 'next/image';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useAuth } from './../../contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
  let menuArray = [false, false]; // DropDown EL 갯수
  const [menu, setMenu] = useState(menuArray);
  const router = useRouter();
  const path = router.pathname.replace('/', ' ');

  const setMenuValue = (props: number) => {
    let newArr = [...menu];
    newArr[props] = !newArr[props];
    setMenu(newArr);
  };

  const { logout } = useAuth();

  return (
    <SliderBlock>
      <TopLogoBlock>
        <Image src="/Logo/december.png" alt="" width={50} height={50} />
        <p className="text-white text-3xl font-bold">PREFACE</p>
      </TopLogoBlock>

      <MenuItemBlock>
        <MenbuButton>
          <AiOutlineDashboard />
          <p className="font-medium">대쉬보드</p>
        </MenbuButton>
      </MenuItemBlock>

      <DropDownMenuBlock>
        <MenbuButton onClick={() => setMenuValue(0)}>
          <BsBank />
          <p className="font-medium">계좌 목록</p>
          <IoIosArrowUp
            className={`${
              menu[0] ? '' : 'rotate-180'
            } transform duration-100 absolute right-5 text-lg`}
          />
        </MenbuButton>
        <DropDownItemBlock isFocus={menu[0]}>
          <DropDownButton>
            <BsGraphUp />
            <Link href="/AccountList">
              <p className="text-base leading-4  ">투자 계좌</p>
            </Link>
          </DropDownButton>
        </DropDownItemBlock>
      </DropDownMenuBlock>

      <MenuItemBlock>
        <MenbuButton>
          <BiUser />
          <p className="font-medium">사용자</p>
        </MenbuButton>
      </MenuItemBlock>

      <MenuItemBlock>
        <MenbuButton>
          <AiOutlineLogout />
          <p className="font-medium" onClick={logout}>
            로그아웃
          </p>
        </MenbuButton>
      </MenuItemBlock>
    </SliderBlock>
  );
};

const SliderBlock = tw.div`

  flex-col
  flex 

  items-start 

  h-full 
  w-screen
  bg-[#001e41]
  sm:w-64 

  xl:rounded-r 

  `;

const TopLogoBlock = tw.div`
flex 
items-center 

h-20
w-full 
space-x-2 
border-b-2 
p-4 
border-gray-600
`;

const MenuItemBlock = tw.div`
flex 
flex-col 
justify-start 
items-center 

w-full 
space-y-3

mt-6  
pl-4 
pb-5
`;

const MenbuButton = tw.button`
flex 
justify-start 
items-center 
w-full 
space-x-6 
text-white 
rounded

focus:outline-none 
focus:text-indigo-400  
`;

const DropDownMenuBlock = tw.div`
flex 
flex-col 
justify-start 
items-center 

w-full 
space-y-3

mt-6  
pl-4 
pb-5
`;

const DropDownItemBlock = styled.div(({ isFocus }: { isFocus: boolean }) => [
  isFocus ? tw`flex` : tw`hidden`,
  tw`
  justify-start 
  flex-col 
  w-full 
  md:w-auto 
  items-start 
  pb-1`,
]);

const DropDownButton = tw.button`
flex 
justify-start 
items-center

w-full 
md:w-52
space-x-6 
px-3 
py-2 
text-gray-400 
rounded 

focus:bg-gray-700 
focus:text-white 
hover:text-white 
hover:bg-gray-700 
`;

export default SideBar;
