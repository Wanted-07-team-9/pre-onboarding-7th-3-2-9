import React from "react";
import Link from "next/link"
import { convertBrokerId, convertAccountStatus, convertAccountNumber, convertComma, convertIsoToTimeStamp, convertPhoneNumber } from '../../utils/convertFn';
import {StyledTd, StyledTable, TableLayout} from './style'
import { IAccount, IUser } from "../../types/interfaces";

const Table = ({ columns, data, isAccount }: any) => {

  return (
    <TableLayout>      
        <StyledTable>
      <thead>
        <tr >
          {columns.map((column : string[], idx: number) => (
            <th key={idx}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isAccount ? (
          data?.map((account : IAccount) => (
            <tr key={account.id}>
              <Link href={`/list/${account.id}`}>
              <td className="broker"><a>{convertBrokerId(account.broker_id)}</a></td>
              </Link>
              <td>{convertAccountNumber(account.broker_id, account.number)}</td>
              <td>{convertAccountStatus(account.status)}</td>
              <td>{account.name}</td>
              <td>{convertComma(account.assets)}</td>
              <td>{convertComma(account.payments)}</td>
              <StyledTd className={Number(account.assets)-Number(account.payments) >= 0 ? (Number(account.assets) - Number(account.payments) === 0 ? 'zeor' : 'plus'): 'minus'
                }>{convertComma(Number(account.assets)-Number(account.payments))}</StyledTd>
              <td>{account.is_active ? '활성화' : '비활성화'}</td>
              <td>{convertIsoToTimeStamp(account.created_at)}</td>
            </tr>
          ))
        ) : (
          data.map((user : IUser) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender_origin}</td>
              <td>{convertIsoToTimeStamp(user.birth_date)}</td>
              <td>{convertPhoneNumber(user.phone_number)}</td>
              <td>{convertIsoToTimeStamp(user.last_login)}</td>
              <td>{convertIsoToTimeStamp(user.created_at)}</td>
            </tr>
          ))
        )}
      </tbody>
    </StyledTable>
    </TableLayout>
  );
}


export default Table;