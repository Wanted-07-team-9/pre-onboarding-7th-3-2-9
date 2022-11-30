import { useForm } from 'react-hook-form'
import { BROKER_LIST_OPTON, } from '../../utils/constantValue'
import React, { useRef } from 'react'
import type { ICreateFormProp } from '../../types/interfaces';
import { Container, Background, ModalBlock, InputWrapper, LabelWrapper, EventWrapper } from './style';

const CreateForm = ({ mutate, setIsModalOpen }: ICreateFormProp) => {
  const { register, handleSubmit } = useForm()
  const modalRef = useRef(null)
  const cllickBackground = (e : React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setIsModalOpen((prev) => (!prev))
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
                <button type='button' className='cancel' onClick={()=>setIsModalOpen((prev)=>!prev)}>취소 하기</button>
                <button className='create'>계좌 생성</button>
              </EventWrapper>
            </section>
          </div>
        </form>
      </ModalBlock>
    </Container>

  )
}


export default CreateForm