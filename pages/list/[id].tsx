import React, { Fragment, useState } from 'react'
import { editAccount, fetchAccountDetail } from '../../src/api/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { convertBrokerId, convertAccountStatus, convertAccountNumber, convertComma, convertIsoToTimeStamp, BROKER_LIST_OPTON, ACCOUNT_STATUS_OPTION } from '../../src/utils/convertFn'
import Header from "../../src/components/Header"
import Sider from "../../src/components/Sider"
import Footer from "../../src/components/Footer"
import { Container, FixedWrapper, ContentWrapper, TableWrapper } from './style'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
const AccountDetail = (props) => {
  const queryClient = useQueryClient()
  const { register, handleSubmit } = useForm()
  const [isEditMode, setIsEditMode] = useState(false)
  const { data, isLoading, isError, error } = useQuery(
    ['userData'], ()=>fetchAccountDetail(props.id))

  const onEdit = (inputData) => {
    if(inputData.is_active === "true" || inputData.is_active==='false'){
      inputData.is_active = JSON.parse(inputData.is_active)
    }
    editAccount(props.id, inputData)
  }

  const { mutate } = useMutation(onEdit, {
    onSuccess: () => queryClient.invalidateQueries(['userData']),
  })
  return (
    <Container>
      <Sider />
      <ContentWrapper>
        <FixedWrapper>
          <Header pageName={'투자계획'} />
          <TableWrapper>
            <div>
              {isLoading&& <div>hello</div>}
              {isError && <div>hello</div>}
              {data&&
                <DetailWrapper>
                  <FlexWrapper>
                    {isEditMode ? <div onClick={() => setIsEditMode((prev) => !prev)}>취소하기</div> : <div onClick={() => setIsEditMode((prev) => !prev)}>수정하기</div>}
                    <CellWrapper>
                      <div className='category'>증권사</div>
                      <div>{convertBrokerId(data.broker_id)}</div>
                    </CellWrapper>
                    <CellWrapper>
                      <div className='category'>계좌번호</div>
                      <div>{convertAccountNumber(data.number)}</div>
                    </CellWrapper>
                    <CellWrapper>
                      <div className='category'>운용상태</div>
                      <div>{convertAccountStatus(data.status)}</div>
                    </CellWrapper>
                  </FlexWrapper>
                  <FlexWrapper>
                    <CellWrapper>
                      <div className='category'>계좌명</div>
                      <div>{data.name}</div>
                    </CellWrapper>
                    <CellWrapper>
                      <div className='category'>평가금액</div>
                      <div>{convertComma(data.assets)}</div>
                    </CellWrapper>
                    <CellWrapper>
                      <div className='category'>입금금액</div>
                      <div>{convertComma(data.payments)}</div>
                    </CellWrapper>
                  </FlexWrapper>
                  <FlexWrapper>
                    <CellWrapper>
                      <div className='category'>계좌활성화여부</div>
                      <div>{data.is_active ? 'O' : 'X'}</div>
                    </CellWrapper>
                    <CellWrapper>
                      <div className='category'>계좌개설일</div>
                      <div>{convertIsoToTimeStamp(data.created_at)}</div>
                    </CellWrapper>
                    <CellWrapper>
                      <div></div>
                      <div></div>
                    </CellWrapper>
                  </FlexWrapper>
                </DetailWrapper>
              }
            </div>
          </TableWrapper>
        </FixedWrapper>
        {isEditMode ?
          <form onSubmit={handleSubmit(mutate)}>
            <FormWrapper>
              <section>
                <label htmlFor='증권사'>증권사</label>
                <select {...register('broker_id')}>
                  {BROKER_LIST_OPTON.map((option, idx) => (
                    <option key={idx} value={option.brokerCode}  selected={option.brokerCode === data.broker_id}>{option.brokerName}</option>
                  ))}
                </select>
                <label htmlFor='계좌번호'>계좌번호</label>
                <input id='계좌번호'  {...register('number')} defaultValue={data.number}/>
                <label htmlFor='운용상태'>운용상태</label>
                <select {...register('status')} >
                  {ACCOUNT_STATUS_OPTION.map((option, idx) => (
                    <option key={idx} value={option.statusCode} selected={option.statusCode === data.status} >{option.accountStatus}</option>
                  ))}
                </select>
              </section>
              <section>
                <label htmlFor='고객명'>계좌명</label>
                <input id='고객명'  {...register('name')} defaultValue={data.name}/>
                <label htmlFor='평가금액'>평가금액</label>
                <input id='평가금액' {...register('assets')}  defaultValue={data.assets}/>
                <label htmlFor='입금금액'>입금금액</label>
                <input id='입금금액'{...register('payments')} defaultValue={data.payments} />
              </section>
              <section>
                <label htmlFor='계좌활성화여부'>계좌활성화여부</label>
                <select  {...register('is_active')} >
                  <option value={true} selected={data.is_active===true}>O</option>
                  <option value={false} selected={data.is_active===false}>X</option>
                </select>
              </section>
              <button>수정하기</button>
            </FormWrapper>
          </form> : <></>}
        <Footer />
      </ContentWrapper>
    </Container>
  )
}

const DetailWrapper = styled.section`
  display:flex;
  justify-content:center;

`

const FlexWrapper = styled.section`
  display:flex;
  flex-direction:column;
`
const CellWrapper = styled.section`
  display:flex;
  width:100%;
  height:100%;
  align-items: center;
  white-space: nowrap;
  font-size: 3rem;
  div{
    width:100%;
    height:100%;
    background-color:#ffffff;
    text-align: right;
  }
  .category{
    font-weight: bold;;
    background-color: #fafafa;
    text-align: left;
  }
`
const FormWrapper = styled.section`
  display:flex;
  section{
    display:flex;
    flex-direction: column;
  }
`

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