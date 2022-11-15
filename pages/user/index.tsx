import Footer from "../../src/components/Footer"
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Pagination from "../../src/components/Pagination"
import { useRecoilValueLoadable } from "recoil"
import Table from "../../src/components/Table"
import { useState } from "react"
import { userList } from "../../src/recoil/selector/userList"
import {Container, FixedWrapper, ContentWrapper, TableWrapper} from './style'

const User = () => {
  const columns= [
    '고객명', '이메일 주소','주민등록상 성별코드', '생년월일', '휴대폰 번호 ', '최근로그인',  '가입일'
  ]
  const [page, setPage] = useState(1)
  const userLodable = useRecoilValueLoadable(userList(page))
  let users = []
  let content = null

  switch (userLodable.state) {
    case 'hasValue':
      users = userLodable.contents.userData
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
        <Pagination total={userLodable?.contents.totalData} page={page} setPage={setPage}/>
        </FixedWrapper>
        <Footer />
      </ContentWrapper>
    </Container>
  )
}

export default User