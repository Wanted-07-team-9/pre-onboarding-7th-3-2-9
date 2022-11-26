import React from 'react'
import { editAccount, deleteAccount, fetchAccountServer, fetchAccountClient } from '../../src/api/api'
import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import { Container, FixedWrapper, ContentWrapper, TableWrapper } from './style'
import EditForm from '../../src/components/EditForm';
import DetailTable from '../../src/components/DetailTable';
import { useRouter } from 'next/router';
import type { IServerSideProps, IEditAccount } from '../../src/types/interfaces';


const AccountDetail = (props : IServerSideProps) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery(
    ['account', props.id], ()=>fetchAccountClient(props.id),{
      enabled: Boolean(props.id)
    })

  const onEdit = async (inputData : IEditAccount) : Promise<unknown> => {
    if(inputData.is_active === "true" || inputData.is_active==='false'){
      inputData.is_active = JSON.parse(inputData.is_active)
    }
    return await editAccount(props.id, inputData)
  }

  const handleDelete =  () => {
    deleteAccount(props.id)
    router.push('/list?page=1')
  }
  const { mutate } = useMutation(onEdit, {
    onSuccess: () => queryClient.invalidateQueries(['account']),
  })
  return (
    <Container>
      <Sider />
      <ContentWrapper>
        <FixedWrapper>
          <Header pageName={'투자계획'} />
          <TableWrapper>
            <div>
              {isLoading&& <div>loading</div>}
              {isError && <div>error</div>}
              {data&& <DetailTable data={data} />}
            </div>
          </TableWrapper>
        </FixedWrapper>
        {data &&<EditForm mutate={mutate} data={data} handleDelete={handleDelete} />}
        <Footer />
      </ContentWrapper>
    </Container>
  )
}

export default AccountDetail

export async function getServerSideProps(context:any ) {
  const {params} = context
  const id = params.id;
  const queryClient = new QueryClient()
  const accessToken = context.req.cookies.accessToken
  await queryClient.prefetchQuery(['account', id], ()=>fetchAccountServer(id, accessToken))
  return {
props : {
  dehydratedState : dehydrate(queryClient),
  id
}
  }
}