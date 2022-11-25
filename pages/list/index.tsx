import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { useState } from "react"
import { Container, FixedWrapper, ContentWrapper, TableWrapper } from './style'
import { useMutation, useQuery, useQueryClient, dehydrate, QueryClient } from "@tanstack/react-query"
import { fetchAccount, createAccount } from "../../src/api/api"
import CreateForm from "../../src/components/CreateForm"
import type { ICreateAccount } from "../../src/types/interfaces"
import { datatest, datatest2 } from "../../src/hooks/useAccount"
import cookie from 'react-cookies'
import { useRouter } from "next/router"


const List = () => {
  const queryClient = useQueryClient()
  const columns = [
    '증권사', '계좌번호', '계좌상태', '계좌명', '평가금액', '입금금액', '수익률', '계좌활성화여부', '계좌개설일'
  ]
  const [page, setPage] = useState(1)
  const accessToken = cookie.load('accessToken')
  const router = useRouter()
  const { data, isLoading, isError } = useQuery(
    ['AccountList',router.query.q],()=>datatest2('1', accessToken))
    console.log(accessToken)
  const handleCreateAccount = async (createAccountData: ICreateAccount): Promise<unknown> => {
    if (createAccountData.is_active === "true" || createAccountData.is_active === 'false') {
      createAccountData.is_active = JSON.parse(createAccountData.is_active)
    }
    createAccountData.created_at = new Date()
    return await createAccount(createAccountData)
  }
  // const data = props.dehydratedState.queries[0].state.data
  const { mutate } = useMutation(handleCreateAccount,
    {
      onSuccess: () => queryClient.invalidateQueries(['accountList', page])
    }
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
              <TableWrapper>
                <CreateForm mutate={mutate} />
                <Table columns={columns} data={data.accountData} isAccount={true} />
                <Pagination total={data.totalData!} page={page} setPage={setPage} />
              </TableWrapper>
            )
          }
        </FixedWrapper>
        <Footer />
      </ContentWrapper>
    </Container>
  )
}


export default List


export const getServerSideProps = async (context : any) => {
  const queryClient = new QueryClient();
  const accessToken = context.req.cookies.accessToken
  await queryClient.prefetchQuery(['AccountList',context.query.q], ()=>datatest(context.query.q, accessToken))
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}