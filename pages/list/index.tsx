import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { Container, FixedWrapper, ContentWrapper, TableWrapper } from './style'
import { useMutation, useQuery, useQueryClient, dehydrate, QueryClient } from "@tanstack/react-query"
import { createAccount, fetchAccountsClient, fetchAccountsServer } from "../../src/api/api"
import CreateForm from "../../src/components/CreateForm"
import type { ICreateAccount } from "../../src/types/interfaces"
import Filter from "../../src/components/Filter"
import { RouterInfo } from "../../src/utils/routerInfo"
import { ACCOUNTS_COLUMNS } from "../../src/utils/constantValue"

const List = () => {
  const queryClient = useQueryClient()
  const {page, active, broker, status, q} = RouterInfo()
  const { data, isLoading, isError } = useQuery(
    ['accounts',page, active, broker, status,q],()=>fetchAccountsClient(page, active, broker, status,q))
  const handleCreateAccount = async (createAccountData: ICreateAccount): Promise<unknown> => {
    if (createAccountData.is_active === "true" || createAccountData.is_active === 'false') {
      createAccountData.is_active = JSON.parse(createAccountData.is_active)
    }
    createAccountData.created_at = new Date()
    return await createAccount(createAccountData)
  }
  const { mutate } = useMutation(handleCreateAccount,
    {
      onSuccess: () => queryClient.invalidateQueries(['accounts', page])
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
                <Filter/>
                <Table columns={ACCOUNTS_COLUMNS} data={data.accountData} isAccount={true} />
                <Pagination total={data.totalData!} page={page} />
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
  const page = context.query.page || 1
  const active = context.query.active || null
  const broker = context.query.broker || null
  const status = context.query.status || null
  const q = context.query.q || null
  await queryClient.prefetchQuery(['accounts',page, active, broker, status, q], ()=>fetchAccountsServer(page, active, broker, status, q, accessToken))
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}