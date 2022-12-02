import React from 'react'
import { editAccount, deleteAccount, fetchAccountServer, fetchAccountClient, fetchUserServer, fetchUserClient } from '../../src/api/api'
import { dehydrate, QueryClient, useMutation, useQueryClient, useQueries } from '@tanstack/react-query';
import { TableWrapper } from '../../src/components/Table/style'
import EditForm from '../../src/components/EditForm';
import DetailTable from '../../src/components/DetailTable';
import { useRouter } from 'next/router';
import type { IServerSideProps, IEditAccount } from '../../src/types/interfaces';
import Layout from '../../src/container';
import Loading from '../../src/components/InfoScreen/Loading';
import { GetServerSideProps } from 'next';

const AccountDetail = (props: IServerSideProps) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const fetchData = useQueries({
    queries : [
      {queryKey : ['account', props.id], queryFn :() => fetchAccountClient(props.id)},
      {queryKey :  ['userList'], queryFn : fetchUserClient}
    ]
  })
  const [accountData, usersData] = fetchData

  const onEdit = async (inputData: IEditAccount): Promise<unknown> => {
    if (inputData.is_active === "true" || inputData.is_active === 'false') {
      inputData.is_active = JSON.parse(inputData.is_active)
    }
    return await editAccount(props.id, inputData)
  }

  const handleDelete = () => {
    deleteAccount(props.id)
    router.push('/list?page=1')
  }
  const { mutate } = useMutation(onEdit, {
    onSuccess: () => queryClient.invalidateQueries(['account']),
  })
  return (
    <Layout>
      <TableWrapper>
        <div className='detail'>
          {accountData.isLoading || usersData.isLoading  &&<Loading status='loading'/>}
          {accountData.isError || usersData.isError && <Loading status='error'/>}
          {accountData.data && usersData.data && <DetailTable data={accountData.data} usersData={usersData.data} />}
        </div>
      </TableWrapper>
      {accountData.data && usersData.data && <EditForm mutate={mutate} data={accountData.data} usersData={usersData.data} handleDelete={handleDelete} />}
    </Layout>
  )
}

export default AccountDetail

export  const  getServerSideProps : GetServerSideProps = async (context) => {
  const accessToken = context.req.cookies.accessToken
  if(!accessToken){
    context.res.writeHead(303, {Location : '/'})
    context.res.end()
  }
  const queryClient = new QueryClient()
  const { params } = context
  const id = params?.id;
  await Promise.all([
    queryClient.prefetchQuery(['account', id], () => fetchAccountServer(id, accessToken)),
    queryClient.prefetchQuery(['userList'], () => fetchUserServer(accessToken))
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id
    }
  }
}