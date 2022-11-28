import { useForm } from 'react-hook-form'
import { BROKER_LIST_OPTON, ACCOUNT_STATUS_OPTION } from "../../utils/constantValue"
import { EditFormWrapper, FormWrapper, ColumnSection, InputWrapper, EventWrapper } from "./style"
import { findCustomerName } from '../../utils/findCustomerName'

const EditForm = ({ mutate, data,usersData, handleDelete }: any) => {
  const { register, handleSubmit } = useForm()
  const is_active_status = (data ? JSON.parse(data.is_active) : '')
  const CUSTOMER_NAME = findCustomerName(usersData, data.user_id)
  return (
    <EditFormWrapper>
      <form onSubmit={handleSubmit(mutate)}>
        <FormWrapper>
          <ColumnSection>
          <InputWrapper>
          <label>고객명</label>
          <div>{CUSTOMER_NAME}</div>
          </InputWrapper>
            <InputWrapper>
            <label htmlFor='증권사'>증권사</label>
            <select {...register('broker_id')}>
              {BROKER_LIST_OPTON.map((option, idx) => (
                <option key={idx} value={option.brokerCode} selected={option.brokerCode === data?.broker_id}>{option.brokerName}</option>
              ))}
            </select>
            </InputWrapper>
            <InputWrapper>
            <label htmlFor='계좌번호'>계좌번호</label>
            <input id='계좌번호'  {...register('number')} defaultValue={data?.number} />
            </InputWrapper>
          </ColumnSection>
          <ColumnSection>
            <InputWrapper>
            <label htmlFor='고객명'>계좌명</label>
            <input id='고객명'  {...register('name')} defaultValue={data?.name} />
            </InputWrapper>
            <InputWrapper>
            <label htmlFor='평가금액'>평가금액</label>
            <input id='평가금액' {...register('assets')} defaultValue={data?.assets} />
            </InputWrapper>
            <InputWrapper>
            <label htmlFor='입금금액'>입금금액</label>
            <input id='입금금액'{...register('payments')} defaultValue={data?.payments} />
            </InputWrapper>
          </ColumnSection>
          <ColumnSection>
          <InputWrapper>
            <label htmlFor='운용상태'>운용상태</label>
            <select {...register('status')} >
              {ACCOUNT_STATUS_OPTION.map((option, idx) => (
                <option key={idx} value={option.statusCode} selected={option.statusCode === data?.status} >{option.accountStatus}</option>
              ))}
            </select>
            </InputWrapper>
            <InputWrapper>
            <label htmlFor='계좌활성화여부'>계좌활성화여부</label>
            <select  {...register('is_active')}>
              <option value={'true'} selected={true === is_active_status}>O</option>
              <option value={'false'} selected={false === is_active_status}>X</option>
            </select>
            </InputWrapper>
          </ColumnSection>
          <EventWrapper>
          <button type="button" id='delete' onClick={handleDelete}>삭제하기</button>
          <button className='event'>수정하기</button>
          </EventWrapper>
        </FormWrapper>
      </form>
    </EditFormWrapper>

  )
}


export default EditForm