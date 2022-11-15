import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import Pagination from "../../src/components/Pagination"
import { useRecoilValueLoadable } from "recoil"
import { accountList } from "../../src/recoil/selector/accountList"
import Table from "../../src/components/Table"
import { useState } from "react"
import {Container, FixedWrapper, ContentWrapper, TableWrapper} from './style'


const List = () => {
  const columns = [
    '증권사','계좌번호','계좌상태','계좌명','평가금액','입금금액','계좌활성화여부','계좌개설일'
  ]
  const [page, setPage] = useState(1)
  const accountLoadable = useRecoilValueLoadable(accountList(page))
  let accounts = []
  let content = null
  switch (accountLoadable.state) {
    case 'hasValue':
      accounts = accountLoadable.contents.accountData
      if (accounts.length === 0) {
        content = <div>로딩</div>
      } else {
        content = <Table columns={columns}  data={accounts} isAccount={true}/> 
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
        <Header pageName={'투자계획'}/>
        <TableWrapper>
        <div>{content}</div>
        </TableWrapper>
        <Pagination total={accountLoadable?.contents.totalData} page={page} setPage={setPage}/>
        </FixedWrapper>
        <Footer />
      </ContentWrapper>
    </Container>
  )
}


export default List