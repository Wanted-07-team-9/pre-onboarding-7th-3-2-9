import { useRouter } from 'next/router';
import { RouterInfo } from '../../utils/RouterInfo';
import {Nav, Button} from './style'

const Pagination = ({total  }  : any) => {
  const router = useRouter()
  const {pathName, page, active, broker, status, q} = RouterInfo()
  const getAccountPath = (broker : any, active: any,status: any, q:any, idx:any ) => {
    return `${pathName}?broker=${broker || ''}&active=${active || ''}&status=${status || ''}&q=${q|| ''}&page=${idx}`
  }
  const handleClickNumber = (i: number) : void => {
    router.push(getAccountPath(broker, active, status, q, i+1))
  }
  const numPages = Math.ceil(Number(total) / 20);

  const handlePreviousNumber = (page: number) : void => {
    if(page===1){
      return
    }
    router.push(getAccountPath(broker, active, status, q, page-1))
  }
  const handleNextNumber = (page: number) : void => {
    if(page===numPages){
      return
    }
    router.push(getAccountPath(broker, active, status, q, page+1))
  }
  return(
      <Nav>
        <Button onClick={()=>handlePreviousNumber(Number(page))}>
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
        <Button onClick={()=>handleNextNumber(Number(page))}>
          &gt;
        </Button>
      </Nav>
  )
}

export default Pagination