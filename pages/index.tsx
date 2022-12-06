import { Layout,  MainContainer,MainWrapper, StyledHeader } from "../style/style"
import Image from 'next/image'
import Form from "../src/components/Form/Form";
import Toast from "../src/components/Toast";
import { GetServerSideProps } from "next"

const Home = () => {
  return (
    <Layout>
      <Toast />
      <MainContainer>
        <MainWrapper>
        <StyledHeader>
          <Image src='/svg/LOGO.svg' alt='로고' width={45} height={45} />
          <h1>PREFACE</h1>
        </StyledHeader>
        <Form/>
        <footer>© December and Companu Inc</footer>
        </MainWrapper>
      </MainContainer>
    </Layout>
  )
}

export const getServerSideProps : GetServerSideProps    = async(context)  => {
  const accessToken = context.req.cookies.accessToken
  if(accessToken){
    context.res.writeHead(303, {Location : '/list?page=1'})
    context.res.end()
  }
  return{
    props : {}
  }
}


export default Home