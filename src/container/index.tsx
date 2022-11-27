import Footer from "../components/Footer"
import Header from "../components/Header"
import Sider from "../components/Sider"
import { RouterInfo } from "../utils/RouterInfo"
import {Container, ContentWrapper, FixedWrapper, Wrapper } from './style'
const Layout = ({children} : any) => {
  const {pathName} = RouterInfo()
  return(
    <Container>
    <Sider />
    <ContentWrapper>
      <FixedWrapper>
        <Header pageName={pathName==='/list' || pathName==='/list/[id]'  ? '투자계획' : '님의 계좌 목록'} />
        <Wrapper>
        {children}
        </Wrapper>
      </FixedWrapper>
      <Footer/>
    </ContentWrapper>
    </Container>
  )
}

export default Layout