import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ACCOUNT_STATUS_OPTION, BROKER_LIST_OPTON } from "../../utils/constantValue";
import type { IFilter } from "../../types/interfaces";


const Filter = ({ setIsModalOpen } : IFilter) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter()
  const getAccountPath = (broker: any, active: any, status: any, q: any) => {
    return `/list?broker=${broker || ''}&active=${active || ''}&status=${status || ''}&q=${q || ''}&page=1`
  }

  const handleFilter = (data: any) => {
    router.push(getAccountPath(data.broker, data.active, data.status, data.q))
  }


  return (
    <StyledFIlteWrapper>
      <form onSubmit={handleSubmit(handleFilter)}>
        <OptionWrapper>
          <label htmlFor="증권사필터" />
          <select id='증권사필터' {...register('broker')}>
            {BROKER_LIST_OPTON.map((option, idx) => (
              idx === 0 ? <option key={0} value={''} >증권사명</option> :
                <option key={idx} value={option.brokerCode}>{option.brokerName}</option>
            ))}
          </select>
        </OptionWrapper>
        <OptionWrapper>
          <label htmlFor="계좌활성화여부필터" />
          <select id='계좌활성화여부필터' {...register('active')}>
            <option value={''}>계좌 활성화 여부</option>
            <option value={'true'}>활성화</option>
            <option value={'false'}>비활성화</option>
          </select>
        </OptionWrapper>
        <OptionWrapper>
          <label htmlFor="운용상태필터" />
          <select id='운용상태필터' {...register('status')}>
            {ACCOUNT_STATUS_OPTION.map((option, idx) => (
              idx === 0 ? <option key={0} value={''}>운용상태</option> :
                <option key={idx} value={option.statusCode}>{option.accountStatus}</option>
            ))}
          </select >
        </OptionWrapper>
        <OptionWrapper>
          <label htmlFor="검색어필터" />
          <input id='검색어필터' {...register('q')} />
        </OptionWrapper>

        <button>검색</button>
      </form>
      <div className="create">
        <button id='createBtn' onClick={() => setIsModalOpen((prev: any) => !prev)}>계좌 등록</button>
      </div>
    </StyledFIlteWrapper>

  )
}

const StyledFIlteWrapper = styled.section`
  display:flex;
  flex-direction:column;
  button{
    border-radius:0.4rem;
    padding: 0.5rem;
    color : var(--color-white);
    border: none;
    background-color:var(--color-blue);
    white-space : nowrap; 
    min-width: 6rem;
    :hover{
      cursor: pointer;
      background-color:var(--color-navy);
    }
  }
  form{
    margin-left: auto;
  }
    .create{
    margin : 1rem 0;
    margin-left: auto;
  }
  #createBtn{
    background-color : #5160EA;
    :hover {
      background-color: var(--color-navy);
    }
    select{
      margin-right: 2rem;
    }
  }
  select {
    font-weight: bold;
    padding:0.5rem;
  }
  input{
    padding:0.5rem;
  }
`

const OptionWrapper = styled.section`
  display : inline;
  margin-right: 0.5rem;
`
export default Filter