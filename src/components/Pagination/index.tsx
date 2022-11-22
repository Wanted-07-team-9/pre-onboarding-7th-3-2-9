import { Dispatch, SetStateAction } from 'react';
import {Nav, Button} from './style'

interface IPaginationProps {
  total : string ;
  page : number;
  setPage : Dispatch<SetStateAction<number>>
}


const Pagination = ({total, page, setPage} : IPaginationProps) => {
  const handleClickNumber = (i: number) : void => {
    setPage(i+1)
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
              onClick={handleClickNumber}
              aria-current={page === i + 1 ? "page" : null}
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