import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import {Nav, Button} from './style'
import { useRecoilState } from "recoil";
import {queriesState} from '../../recoil/atom'

interface IPaginationProps {
  total : string ;
  page : number;
  setPage : Dispatch<SetStateAction<number>>
}


const Pagination = ({total, page, setPage} : IPaginationProps) => {
  const [filterState, setFilterState] = useRecoilState(queriesState)
  const router = useRouter()
  const handleClickNumber = (i: number) : void => {
    const data = {'_page' : i+1}
    setFilterState({...filterState,...data})
    router.push(`/list?page=${i+1}`)
  }
  const numPages = Math.ceil(Number(total) / 20);
  return(
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {numPages && Array(numPages)
          .fill(undefined)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={()=>handleClickNumber(i)}
              className = {String(i+1) === router.query.page ? 'selected': '' }
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
  )
}

export default Pagination