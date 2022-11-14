import { Layout, StyledForm, MainContainer,MainWrapper, LoginText, StyledHeader, ImgWrapper } from "./style"
import { useForm } from "react-hook-form";
import Image from 'next/image'
import { IForm } from "../src/types/interfaces";
import { login } from "../src/api/api";
import { useRouter } from "next/router";

const Home = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const router = useRouter()
  const onSubmit =  (data : IForm) => {
    login(data)
    router.push('/list')
  }

  return (
    <Layout>
      <MainContainer>
        <MainWrapper>
        <StyledHeader>
          <Image src='/svg/LOGO.svg' alt='로고' width={45} height={45} />
          <h1>PREFACE</h1>
        </StyledHeader>
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
        <footer>© December and Companu Inc</footer>
        </MainWrapper>
      </MainContainer>
    </Layout>
  )
}

export default Home