import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ACCOUNT_STATUS_OPTION, BROKER_LIST_OPTON } from "../../utils/constantValue";

const Filter = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter()
  const getAccountPath = (broker : any, active: any,status: any, q:any ) => {
    return `/list?broker=${broker || ''}&active=${active || ''}&status=${status || ''}&q=${q|| ''}&page=1`
  }

  const handleFilter = (data : any) => {
  router.push(getAccountPath(data.broker, data.active, data.status, data.q))
  }


  return (
    <form onSubmit={handleSubmit(handleFilter)}>
      <label htmlFor="증권사필터"/>
      <select id='증권사필터' {...register('broker')}>
        {BROKER_LIST_OPTON.map((option, idx) => (
          idx === 0 ? <option key={0} value={''} >증권사명</option> :
            <option key={idx} value={option.brokerCode}>{option.brokerName}</option>
        ))}
      </select>

      <label htmlFor="계좌활성화여부필터"/>
      <select id='계좌활성화여부필터' {...register('active')}>
        <option value={''}>계좌 활성화 여부</option>
        <option value={'true'}>활성화</option>
        <option value={'false'}>비활성화</option>
      </select>
      <label htmlFor="운용상태필터"/>
      <select id='운용상태필터' {...register('status')}>
      {ACCOUNT_STATUS_OPTION.map((option, idx) => (
          idx === 0 ? <option key={0} value={''}>운용상태</option> :
          <option key={idx} value={option.statusCode}>{option.accountStatus}</option>
              ))}
      </select >
      <label htmlFor="검색어필터"/>
      <input id='검색어필터' {...register('q')}/>
      <button>필터링</button>
    </form>
  )
}

export  default Filter