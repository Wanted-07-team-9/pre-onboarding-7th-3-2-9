import { DetailWrapper, FlexWrapper, CellWrapper } from "./style"
import { convertBrokerId, convertAccountNumber, convertAccountStatus, convertComma, convertIsoToTimeStamp } from "../../utils/convertFn"
import { findCustomerName } from "../../utils/findCustomerName"
import { IAccount, IUserData } from "../../types/interfaces"

interface IDetail {
  data : IAccount;
  usersData :IUserData[];
}

const DetailTable = ({ data, usersData }: IDetail) => {
  const CUSTOMER_NAME = findCustomerName(usersData, data.user_id)
  return (
    <DetailWrapper>
      <FlexWrapper>
        <CellWrapper>
          <div className="category">고객명</div>
          <div className="content">{CUSTOMER_NAME}</div>
        </CellWrapper>
        <CellWrapper>
          <div className='category'>증권사</div>
          <div className="content">{convertBrokerId(data?.broker_id)}</div>
        </CellWrapper>
        <CellWrapper>
          <div className='category'>계좌번호</div>
          <div className="content">{convertAccountNumber(data?.broker_id, data.number)}</div>
        </CellWrapper>
      </FlexWrapper>
      <FlexWrapper>
        <CellWrapper>
          <div className='category'>계좌명</div>
          <div className="content">{data.name}</div>
        </CellWrapper>
        <CellWrapper>
          <div className='category'>평가금액</div>
          <div className="content">{convertComma(data.assets)}</div>
        </CellWrapper>
        <CellWrapper>
          <div className='category'>입금금액</div>
          <div className="content">{convertComma(data.payments)}</div>
        </CellWrapper>
      </FlexWrapper>
      <FlexWrapper>
      <CellWrapper>
          <div className='category'>운용상태</div>
          <div className="content">{convertAccountStatus(data.status)}</div>
        </CellWrapper>
        <CellWrapper>
          <div className='category'>계좌활성화여부</div>
          <div className="content">{data.is_active ? 'O' : 'X'}</div>
        </CellWrapper>
        <CellWrapper>
          <div className='category'>계좌개설일</div>
          <div className="content">{convertIsoToTimeStamp(data.created_at)}</div>
        </CellWrapper>
      </FlexWrapper>
    </DetailWrapper>
  )
}

export default DetailTable