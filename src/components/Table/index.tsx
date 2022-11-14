import React from "react";
import Link from "next/link"
import { convertBrokerId, convertAccountStatus, convertAccountNumber, convertComma, convertIsoToTimeStamp, convertPhoneNumber } from '../../utils/convertFn';

const Table = ({ columns, data, isAccount }: any) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, idx: any) => (
            <th key={idx}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isAccount ? (
          data.map((account) => (
            <tr key={account.id}>
              <td>{convertBrokerId(account.broker_id)}</td>
              <td>{convertAccountNumber(account.number)}</td>
              <td>{convertAccountStatus(account.status)}</td>
              <td>{account.name}</td>
              <td>{convertComma(account.assets)}</td>
              <td>{convertComma(account.payments)}</td>
              <td>{account.is_active ? 'O' : 'X'}</td>
              <td>{convertIsoToTimeStamp(account.created_at)}</td>
            </tr>
          ))
        ) : (
          data.map((user) => (
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
    </table>
  );
}

export default Table;