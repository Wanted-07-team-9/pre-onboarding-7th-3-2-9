import { useForm } from 'react-hook-form'
import { BROKER_LIST_OPTON, ACCOUNT_STATUS_OPTION } from '../../utils/constantValue'
import styled from "styled-components";

const CreateForm = ({mutate} : any) => {
  const { register, handleSubmit } = useForm()

  return(
    <CreateFormWrapper>
      <form onSubmit={handleSubmit(mutate)}>
        <FormWrapper>
          <InputSection>
          <InputWrapper>
          <LabelWrapper>
          <label htmlFor='증권사'>증권사</label>
          </LabelWrapper>
            <select id='증권사' {...register('broker_id')}>
              {BROKER_LIST_OPTON.map((option, idx) => (
                <option key={idx} value={option.brokerCode}>{option.brokerName}</option>
              ))}
            </select>
            </InputWrapper>
            <InputWrapper>
            <LabelWrapper>
            <label htmlFor='계좌번호'>계좌번호</label>
            </LabelWrapper>
            <input id='계좌번호'  {...register('number')}/>
            </InputWrapper>
          </InputSection>
          <InputSection>
          <InputWrapper>
          <LabelWrapper>
          <label htmlFor='운용상태'>운용상태</label>
          </LabelWrapper>

            <select id='운용상태' {...register('status')} >
              {ACCOUNT_STATUS_OPTION.map((option, idx) => (
                <option key={idx} value={option.statusCode}>{option.accountStatus}</option>
              ))}
            </select>
            </InputWrapper>
            <InputWrapper>
            <LabelWrapper>
            <label htmlFor='고객명'>계좌명</label>
            </LabelWrapper>
            <input id='고객명'  {...register('name')} />
            </InputWrapper> 
          </InputSection>
            <InputSection>
            <InputWrapper>
            <LabelWrapper>
            <label htmlFor='평가금액'>평가금액</label>
            </LabelWrapper>
            <input id='평가금액' {...register('assets')}/>
            </InputWrapper>
            <InputWrapper>
            <LabelWrapper>
            <label htmlFor='입금금액'>입금금액</label>
            </LabelWrapper>
            <input id='입금금액'{...register('payments')}/>
            </InputWrapper>
            </InputSection>
            <InputSection>
            <InputWrapper>
            <LabelWrapper>
            <label htmlFor='계좌활성화여부'>계좌활성화여부</label>
            </LabelWrapper>
            <select  {...register('is_active')}>
              <option value={'true'}>O</option>
              <option value={'false'}>X</option>
            </select>
            </InputWrapper>
          <EventWrapper>
          {/* <button type="button" className='event'  onClick={handleDelete}>삭제하기</button> */}
          <button className='event'>계좌 생성</button>
          </EventWrapper>
            </InputSection>
        </FormWrapper>
      </form>
    </CreateFormWrapper>
  )
}

const CreateFormWrapper = styled.section`
  display:flex;
  justify-content:center;
`


const FormWrapper = styled.section`
  display:flex;
`
const EventWrapper = styled.span`
    display:flex;
    padding: 1rem;
    
    button{
    cursor: pointer;
    margin-left: auto;
    background-color: #5160EA;
    color : white;
    border-radius:2rem;
    padding: 0.7rem;
    border: none;
    }
`

const InputSection = styled.section`

`

const InputWrapper = styled.div`
  display: flex;
  justify-content:right;
  padding: 1rem;
  
`
const LabelWrapper = styled.div`
  display:flex;
  width:100%;
  margin-right: 1rem;
  align-items:center;
  label{
    font-size: 1.2rem;
    font-weight: bold;
  }

`
export default CreateForm