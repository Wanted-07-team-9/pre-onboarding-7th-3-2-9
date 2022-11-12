import { Layout, StyledForm, MainContainer, Title } from "./style"
import { useForm } from "react-hook-form";
import {axiosInstance} from '../src/api/axiosInstance'
import Image from 'next/image'

interface IForm {
  email : string;
  password : string;
}


const Home = ()=> {
  const { register, watch, handleSubmit } = useForm<IForm>();
  console.log(watch());

  const onSubmit = async(data : IForm) =>{
    const response = await axiosInstance.post('/login',data)
    console.log(response)
  }
  return (
    <Layout>
      <MainContainer>
        <h1>PREFACE</h1>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Title>로그인</Title>
          <input {...register("email")} placeholder={'아이디를 입력하세요'}/>
          <input {...register("password")} placeholder={'비밀번호를 입력하세요'} />
          <button>
            <Image src='/svg/Login.svg' alt ='login' width={10} height={10} />
            로그인
            </button>
        </StyledForm>
        <footer>© December and Companu Inc</footer>
      </MainContainer>
    </Layout>
  )
  }

export default Home