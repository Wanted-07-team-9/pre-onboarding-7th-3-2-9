import Pagination from "../../src/components/Pagination"
import Table from "../../src/components/Table"
import { TableWrapper } from '../../src/components/Table/style'
import { useMutation, useQueryClient, dehydrate, QueryClient, useQueries } from "@tanstack/react-query"
import { createAccount, fetchAccountsClient, fetchAccountsServer, fetchUserClient, fetchUserServer } from "../../src/api/api"
import CreateForm from "../../src/components/CreateForm"
import type { ICreateAccount } from "../../src/types/interfaces"
import Filter from "../../src/components/Filter"
import { RouterInfo } from "../../src/utils/RouterInfo"
import { ACCOUNTS_COLUMNS } from "../../src/utils/constantValue"
import Layout from "../../src/container"
import Loading from "../../src/components/InfoScreen/Loading"
import Toast from "../../src/components/Toast"
import React, { useState } from "react"
import { Wrapper } from "../../src/container/style"
import { GetServerSideProps } from "next"

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const queryClient = useQueryClient()
  const { page, active, broker, status, q } = RouterInfo()
  const results = useQueries({
    queries : [
      {queryKey : ['accounts', page, active, broker, status, q], queryFn :() => fetchAccountsClient(page, active, broker, status, q)},
      {queryKey :  ['userList'], queryFn : fetchUserClient}
    ]
  })
  const [accountsData, usersData] = results
  const handleCreateAccount = async (createAccountData: ICreateAccount): Promise<unknown> => {
    createAccountData.created_at = new Date()
    return await createAccount(createAccountData)
  }
  const { mutate } = useMutation(handleCreateAccount,
    {
      onSuccess: () => queryClient.invalidateQueries(['accounts', page])
    }
  )


  return (
    <Layout>
      <Toast />
      <Wrapper>
      {accountsData.isLoading || usersData.isLoading && <Loading status='loading' />}
      {accountsData.isError || usersData.isError && <Loading status='error' />}
      {accountsData.data && usersData.data &&
        <React.Fragment>
          {isModalOpen && <CreateForm mutate={mutate} setIsModalOpen={setIsModalOpen} />}
          <TableWrapper>
            <Filter setIsModalOpen={setIsModalOpen} />
            <Table columns={ACCOUNTS_COLUMNS} data={accountsData.data.accountData} isAccount={true}  userData={usersData?.data}/>
            <Pagination total={accountsData.data.totalData!}  />
          </TableWrapper>
        </React.Fragment>}
        </Wrapper>
    </Layout>
  )
}

export default List


export const getServerSideProps  : GetServerSideProps = async (context) => {
  
  const queryClient = new QueryClient();
  const accessToken = context.req.cookies.accessToken
  if(!accessToken){
    context.res.writeHead(303, {Location : '/'})
    context.res.end()
  }
  const page = context.query.page || '1'
  const active = context.query.active || null
  const broker = context.query.broker || null
  const status = context.query.status || null
  const q = context.query.q || null
  await Promise.all([
    queryClient.prefetchQuery(['accounts', page, active, broker, status, q], () => fetchAccountsServer(page, active, broker, status, q, accessToken)),
    queryClient.prefetchQuery(['userList'], () => fetchUserServer(accessToken))
  ])
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}