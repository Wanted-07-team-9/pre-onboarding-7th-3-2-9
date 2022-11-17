import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { useState } from "react"
import { Container, FixedWrapper, ContentWrapper, TableWrapper } from './style'
import { useQuery } from "@tanstack/react-query"
import { fetchAccount } from "../../src/api/api"

const List = () => {
  const columns = [
    '증권사', '계좌번호', '계좌상태', '계좌명', '평가금액', '입금금액', '수익률', '계좌활성화여부', '계좌개설일'
  ]
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useQuery(
    ['accountList', page], () => fetchAccount(page)
  )
  return (
    <Container>
      <Sider />
      <ContentWrapper>
        <FixedWrapper>
          <Header pageName={'투자계획'} />
          {isLoading && <div>loading</div>}
          {isError && <div>error</div>}
          {data &&
            (
              <>
                <TableWrapper>
                  <Table columns={columns} data={data.accountData} isAccount={true} />
                </TableWrapper>
                <Pagination total={data.totalData} page={page} setPage={setPage} /></>
            )
          }
        </FixedWrapper>
        <Footer />
      </ContentWrapper>
    </Container>
  )
}


export default List
