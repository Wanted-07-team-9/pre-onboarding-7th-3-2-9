import Image from 'next/image';
import React, { useState } from 'react';
import tw from 'twin.macro';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';

const AuthHome = () => {
  return (
    <BackGround>
      <AuthWrapper>
        <LogoBlock>
          <Image src="/Logo/fintLogo.svg" alt="" width={80} height={80} />
          <div>PreFace</div>
        </LogoBlock>
        <FormBlock>
          <AuthTypeTextBlock>
            <AiOutlineUser />
            <p className="ml-2">로그인</p>
          </AuthTypeTextBlock>
          <RecommendTextBlock>
            계정이 아직 없으신가요?
            <RecommendLinkBlock>회원가입 바로가기</RecommendLinkBlock>
          </RecommendTextBlock>
          <div>
            <InputLabelBlock>Email</InputLabelBlock>
            <InputBlock type="email" />
          </div>
          <div className="mt-6">
            <InputLabelBlock>Password</InputLabelBlock>
            <InputBlock type="password" />
          </div>
          <div className="mt-8">
            <SubmitButton>로그인</SubmitButton>
          </div>
        </FormBlock>
      </AuthWrapper>
      <FooterBlock>ⓒ December and Company </FooterBlock>
    </BackGround>
  );
};

const BackGround = tw.div`
flex 
flex-col 
justify-center 
h-screen 
bg-gradient-to-tr from-white to-slate-300 
w-full 
py-16 
px-4
`;

const AuthWrapper = tw.div`
flex 
flex-col 
items-center 
justify-center
`;

const LogoBlock = tw.div`
flex 
items-center
text-[40px] 
font-black 
text-gray-700 
font-serif

[&>div]:ml-6
`;

const FormBlock = tw.form`
lg:w-1/3 
md:w-1/2 
w-full 
p-10 
mt-16

bg-white 
shadow 
rounded 
`;

const AuthTypeTextBlock = tw.div`
flex 
text-xl 
font-extrabold 
leading-6 
text-gray-800
`;

const RecommendTextBlock = tw.div`
flex 
flex-col 
text-sm 
mt-4 
font-medium 
leading-none
 text-gray-500
`;

const RecommendLinkBlock = tw.div`
my-2 
text-sm 
font-medium 
leading-none 
underline 
text-gray-800 
cursor-pointer
`;

const InputLabelBlock = tw.p`
text-sm 
font-medium 
leading-none 
text-gray-800
`;

const InputBlock = tw.input`
bg-gray-200 
leading-none 
text-gray-800 
w-full 
text-xs 
font-medium 
py-3 
pl-3 
mt-2
border 
rounded 
focus:outline-none 
focus:bg-gray-50 
`;

const SubmitButton = tw.button`
w-full
text-slate-400 
bg-slate-100 
py-4 
border 
rounded 
text-sm 
font-semibold 
focus:outline-none 
focus:ring-2 
focus:ring-offset-2 
focus:ring-slate-200 
`;

const FooterBlock = tw.div`
w-full 
text-center 
mt-10
`;

export default AuthHome;
