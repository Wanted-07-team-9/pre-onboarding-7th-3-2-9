import { DetailWrapper, FlexWrapper, CellWrapper } from "./style"
import { convertBrokerId,  convertAccountNumber, convertAccountStatus, convertComma, convertIsoToTimeStamp} from "../../utils/convertFn"

const DetailTable = ({data} : any) => {
  return(
    <DetailWrapper>
    <FlexWrapper>
      <CellWrapper>
        <div className='category'>증권사</div>
        <div>{convertBrokerId(data?.broker_id)}</div>
      </CellWrapper>
      <CellWrapper>
        <div className='category'>계좌번호</div>
        <div>{convertAccountNumber(data.number)}</div>
      </CellWrapper>
      <CellWrapper>
        <div className='category'>운용상태</div>
        <div>{convertAccountStatus(data.status)}</div>
      </CellWrapper>
    </FlexWrapper>
    <FlexWrapper>
      <CellWrapper>
        <div className='category'>계좌명</div>
        <div>{data.name}</div>
      </CellWrapper>
      <CellWrapper>
        <div className='category'>평가금액</div>
        <div>{convertComma(data.assets)}</div>
      </CellWrapper>
      <CellWrapper>
        <div className='category'>입금금액</div>
        <div>{convertComma(data.payments)}</div>
      </CellWrapper>
    </FlexWrapper>
    <FlexWrapper>
      <CellWrapper>
        <div className='category'>계좌활성화여부</div>
        <div>{data.is_active ? 'O' : 'X'}</div>
      </CellWrapper>
      <CellWrapper>
        <div className='category'>계좌개설일</div>
        <div>{convertIsoToTimeStamp(data.created_at)}</div>
      </CellWrapper>
    </FlexWrapper>
  </DetailWrapper>
  )
}

export default DetailTable