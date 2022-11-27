import { useForm } from 'react-hook-form'
import { BROKER_LIST_OPTON, } from '../../utils/constantValue'
import styled from "styled-components";
import { useRef } from 'react'
import {Dispatch, SetStateAction} from 'react'

interface ICreateFormProp {
  mutate: any;
  setIsModalOpen : Dispatch<SetStateAction<boolean>>
}
const CreateForm = ({ mutate, setIsModalOpen }: ICreateFormProp) => {
  const { register, handleSubmit } = useForm()
  const modalRef = useRef(null)
  const cllickBackground = (e: any) => {
    if (modalRef.current === e.target) {
      setIsModalOpen((prev: any) => (!prev))
    }
  }

  return (
    <Container>
      <Background ref={modalRef} onClick={cllickBackground} />
      <ModalBlock>
        <form onSubmit={handleSubmit(mutate)}>
          <div>
            <section>
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
                <input id='계좌번호'  {...register('number')} />
              </InputWrapper>
              <InputWrapper>
                <LabelWrapper>
                  <label htmlFor='고객명'>계좌명</label>
                </LabelWrapper>
                <input id='고객명'  {...register('name')} />
              </InputWrapper>
              <InputWrapper>
                <LabelWrapper>
                  <label htmlFor='입금금액'>입금금액</label>
                </LabelWrapper>
                <input id='입금금액'{...register('payments')} />
              </InputWrapper>
              <EventWrapper>
                <button type='button' className='cancel' onClick={()=>setIsModalOpen((prev : any)=>!prev)}>취소 하기</button>
                <button className='create'>계좌 생성</button>
              </EventWrapper>
            </section>
          </div>
        </form>
      </ModalBlock>
    </Container>

  )
}

const Container = styled.div`
    display: flex;
    justify-content:center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const Background = styled.div`
    position: fixed;
    width:100%;
    height: 100%;
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ModalBlock = styled.div`
    position: absolute;
    top: 20%;
    border-radius: 10px;
    padding: 1.5rem;
    background-color: #5160EA;
    @media (max-width: 1120px) {
        width: 50rem;
    }
    @media (max-width: 50rem) {
        width: 80%;
    }
    min-height: 18rem;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;


const EventWrapper = styled.span`
    display:flex;
    padding: 1rem;
    button{
    cursor: pointer;
    margin-left: auto;
    background-color: #468FF7;
    color : white;
    border-radius:2rem;
    padding: 0.7rem;
    border: none;
    }
    .cancel{
      background-color:tomato;
    }
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
    color : #E0E0E0;
  }
`

export default CreateForm