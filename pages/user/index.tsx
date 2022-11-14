import styled from "styled-components"
import Footer from "../../src/components/Footer"
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import { useRecoilValueLoadable } from "recoil"
import { userList } from "../../src/recoil/selector/userList"
import Table from "../../src/components/Table"

const User = () => {
  const userLoadable = useRecoilValueLoadable(userList)
  let users = []
  let content = null
  const columns= [
    '고객명', '이메일 주소','주민등록상 성별코드', '생년월일', '휴대폰 번호 ', '최근로그인',  '가입일'
  ]
  switch (userLoadable.state) {
    case 'hasValue':
      users = userLoadable.contents
      if (users.length === 0) {
        content = <div>로딩</div>
      } else {
        content = <Table columns={columns}  data={users} isAccount={false}/> 
      }
      break;
    case 'hasError':
      content =  <div>로딩</div>
      break;
    case 'loading':
      content = <div>로딩</div>
      break;
    default:
      content =  <div>로딩</div>
  }
  return(
    <Container>
      <Sider />
      <ContentWrapper>
        <FixedWrapper>
        <Header pageName={'님의 계좌 목록'}/>
        <TableWrapper>
        <div>{content}</div>
        </TableWrapper>
        </FixedWrapper>
        <Footer />
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction: row;
`

const FixedWrapper = styled.section`
  padding-bottom : 3rem;
`


const ContentWrapper = styled.div`
  min-height:100%;
  position:relative;
  width:100%;
`

const TableWrapper = styled.section`
  background-color: #FAFAFA;
  
`


export default User