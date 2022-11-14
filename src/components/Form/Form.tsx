import { useForm } from "react-hook-form";
import { IForm } from "../../types/interfaces";
import { login } from "../../api/api";
import { StyledForm,LoginText,ImgWrapper } from "./style";
import Image from 'next/image'

const Form = () => {
  const { register, handleSubmit } = useForm<IForm>();
  // const router = useRouter()
  const onSubmit =  (data : IForm) => {
    login(data)
    // router.push('/list')
  }
  return(
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <LoginText>
      <ImgWrapper>
      <Image src='/svg/UserIconBlack.svg' alt='user' width={10} height={10} />
      </ImgWrapper>
    로그인
    </LoginText>
    <input {...register("email")} placeholder={'아이디를 입력하세요'} />
    <input {...register("password")} placeholder={'비밀번호를 입력하세요'} />
    <button>
      <Image src='/svg/Login.svg' alt='login' width={10} height={10} />
      로그인
    </button>
  </StyledForm>
  )
}

export default Form