import styled from "styled-components"
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import { useRecoilValueLoadable } from "recoil"
import { accountList } from "../../src/recoil/selector/accountList"
import Table from "../../src/components/Table"

const columns = [
  '증권사','계좌번호','계좌상태','계좌명','평가금액','입금금액','계좌활성화여부','계좌개설일'
]

const List = () => {
  const accountLoadable = useRecoilValueLoadable(accountList)
  let accounts = []
  let content = null
  switch (accountLoadable.state) {
    case 'hasValue':
      accounts = accountLoadable.contents
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
export default List