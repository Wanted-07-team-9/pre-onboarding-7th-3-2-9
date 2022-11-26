import React from 'react'
import { editAccount, deleteAccount, fetchAccountServer, fetchAccountClient } from '../../src/api/api'
import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TableWrapper } from '../../src/components/Table/style'
import EditForm from '../../src/components/EditForm';
import DetailTable from '../../src/components/DetailTable';
import { useRouter } from 'next/router';
import type { IServerSideProps, IEditAccount } from '../../src/types/interfaces';
import Layout from '../../src/container';

const AccountDetail = (props: IServerSideProps) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery(
    ['account', props.id], () => fetchAccountClient(props.id), {
    enabled: Boolean(props.id)
  })

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
        <div>
          {isLoading && <div>loading</div>}
          {isError && <div>error</div>}
          {data && <DetailTable data={data} />}
        </div>
      </TableWrapper>
      {data && <EditForm mutate={mutate} data={data} handleDelete={handleDelete} />}
    </Layout>
  )
}

export default AccountDetail

export async function getServerSideProps(context: any) {
  const { params } = context
  const id = params.id;
  const queryClient = new QueryClient()
  const accessToken = context.req.cookies.accessToken
  await queryClient.prefetchQuery(['account', id], () => fetchAccountServer(id, accessToken))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id
    }
  }
}