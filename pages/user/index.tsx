import Footer from "../../src/components/Footer"
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { useState } from "react"
import {Container, FixedWrapper, ContentWrapper, TableWrapper} from './style'
import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../../src/api/api"

const User = () => {
  const columns= [
    '고객명', '이메일 주소','주민등록상 성별코드', '생년월일', '휴대폰 번호 ', '최근로그인',  '가입일'
  ]
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useQuery(
    ['userList', page], () => fetchUser(page)
  )

  return(
    <Container>
      <Sider />
      <ContentWrapper>
        <FixedWrapper>
        <Header pageName={'님의 계좌 목록'}/>
        {isLoading && <div>loading</div>}
          {isError && <div>error</div>}
          {data &&
            (
              <>
                <TableWrapper>
                  <Table columns={columns} data={data.userData} isAccount={false} />
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

export default User