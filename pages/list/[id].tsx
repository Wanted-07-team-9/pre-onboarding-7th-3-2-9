import React from 'react'
import { editAccount, fetchAccountDetail } from '../../src/api/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import { Container, FixedWrapper, ContentWrapper, TableWrapper } from './style'
import EditForm from '../../src/components/EditForm';
import DetailTable from '../../src/components/DetailTable';
const AccountDetail = (props) => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery(
    ['accountData'], ()=>fetchAccountDetail(props.id))
  const onEdit = (inputData) => {
    if(inputData.is_active === "true" || inputData.is_active==='false'){
      inputData.is_active = JSON.parse(inputData.is_active)
    }
    editAccount(props.id, inputData)
  }

  const { mutate } = useMutation(onEdit, {
    onSuccess: () => queryClient.invalidateQueries(['accountData']),
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
        {data &&<EditForm mutate={mutate} data={data} />}
        <Footer />
      </ContentWrapper>
    </Container>
  )
}

export default AccountDetail

export async function getServerSideProps(context:any ) {
  const {params} = context
  const id = params.id;
  return {
props : {
  id
}
  }
}