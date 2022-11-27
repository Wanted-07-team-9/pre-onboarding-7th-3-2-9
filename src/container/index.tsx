import Footer from "../components/Footer"
import Header from "../components/Header"
import Sider from "../components/Sider"
import { RouterInfo } from "../utils/RouterInfo"
import {Container, ContentWrapper, FixedWrapper } from './style'
const Layout = ({children} : any) => {
  const {pathName} = RouterInfo()
  return(
    <Container>
    <Sider />
    <ContentWrapper>
      <FixedWrapper>
        <Header pageName={pathName==='/list' || pathName==='/list/[id]'  ? '투자계획' : '님의 계좌 목록'} />
        {children}
      </FixedWrapper>
      <Footer/>
    </ContentWrapper>
    </Container>
  )
}

export default Layout