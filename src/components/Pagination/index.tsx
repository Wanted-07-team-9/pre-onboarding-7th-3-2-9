import { useRouter } from 'next/router';
import { RouterInfo } from '../../utils/RouterInfo';
import {Nav, Button} from './style'

interface  IPagination {
  total : string
}

const Pagination = ({total}  : IPagination) => {
  const router = useRouter()
  const {pathName, page, active, broker, status, q} = RouterInfo()
  
  const getAccountPath = (broker : string | string[] | null, active: string | string[] | null,status: string | string[] | null, q:string | string[] | null, idx: number) => {
    return `${pathName}?broker=${broker || ''}&active=${active || ''}&status=${status || ''}&q=${q|| ''}&page=${idx}`
  }
  const handleClickNumber = (i : number) : void => {
    router.push(getAccountPath(broker, active, status, q, Number(i)+1))
  }
  const numPages = Math.ceil(Number(total) / 20);

  const handlePreviousNumber = (page: string |  string[] | null) : void => {
    if(page==='1'){
      return
    }
    router.push(getAccountPath(broker, active, status, q, Number(page)-1))
  }
  const handleNextNumber = (page: string |  string[] | null) : void => {
    if(Number(page)===numPages){
      return
    }
    router.push(getAccountPath(broker, active, status, q, Number(page)+1))
  }
  return(
      <Nav>
        <Button onClick={()=>handlePreviousNumber(page)}>
          &lt;
        </Button>
        {numPages && Array(numPages)
          .fill(undefined)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={()=>handleClickNumber(i)}
              className = {String(i+1) === page ? 'selected': '' }
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={()=>handleNextNumber(page)}>
          &gt;
        </Button>
      </Nav>
  )
}

export default Pagination