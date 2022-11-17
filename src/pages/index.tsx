import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { loginForm } from '../types/authType';
import { useAuth } from './../contexts/AuthContext';
import AuthForm from '../components/Auth/AuthForm';

const AuthHome = () => {
  const { user, login } = useAuth();

  const onSubmit = async (loginForm: loginForm) => {
    login(loginForm);
  };

  return (
    <BackGround>
      <AuthWrapper>
        <LogoBlock>
          <Image src="/Logo/fintLogo.svg" alt="" width={80} height={80} />
          <div>PreFace</div>
        </LogoBlock>
        <AuthForm onSubmit={onSubmit} />
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
