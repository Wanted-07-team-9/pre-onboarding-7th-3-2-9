import React, { useState } from 'react';
import tw from 'twin.macro';
import { loginForm } from '../../types/authType';
import { AiOutlineUser } from 'react-icons/ai';

const AuthForm = ({ onSubmit }: any) => {
  const [loginForm, setLoginForm] = useState<loginForm>({
    email: '',
    password: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm(prev => ({ ...prev, [`${e.target.getAttribute('name')}`]: e.target.value }));
  };

  return (
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
        <InputBlock type="email" name="email" onChange={onChange} />
      </div>
      <div className="mt-6">
        <InputLabelBlock>Password</InputLabelBlock>
        <InputBlock type="password" name="password" onChange={onChange} />
      </div>
      <div className="mt-8">
        <SubmitButton
          onClick={e => {
            e.preventDefault();
            onSubmit(loginForm);
          }}
        >
          로그인
        </SubmitButton>
      </div>
    </FormBlock>
  );
};
const FormBlock = tw.form`
md:w-[720px]
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

export default AuthForm;
