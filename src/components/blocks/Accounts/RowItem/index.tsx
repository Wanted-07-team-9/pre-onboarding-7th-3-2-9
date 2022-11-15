import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ACCOUNT_STATUS, BROKERS } from 'utils/DataEnum';
import { convertAccountNumber } from 'utils/DataFormatter';
import { convertCurrency, diffAsset } from 'utils/CurrencyFormatter';
import { styled } from '@mui/material';

const StyledTableRow = styled(TableRow)(() => ({
  cursor: 'pointer',
}));

const StyledTableCell = styled(TableCell)(() => ({
  '&.plus_payments': {
    color: '#ff0000',
  },
  '&.minus_payments': {
    color: '#0000ff',
  },
  '&.principal': {
    color: '#000',
  },
}));

const RowItem = ({ data, onRowClick, onNameClick }) => {
  const diffColor = diffAsset(data.assets, data.payments);
  const number = convertAccountNumber(data.broker_id, data.number);
  return (
    <>
      <StyledTableRow hover onClick={onRowClick} data-account-id={data.id}>
        <StyledTableCell component="th" scope="data">
          <span onClick={onNameClick} data-user-id={data.user_id}>
            {data.user_name}
          </span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{BROKERS[data.broker_id]}</span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{number}</span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{ACCOUNT_STATUS[data.status]}</span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{data.name}</span>
        </StyledTableCell>
        <StyledTableCell className={diffColor}>
          <span>{convertCurrency(data.assets)}</span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{convertCurrency(data.payments)}</span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{data.is_active ? '활성' : '비활성'}</span>
        </StyledTableCell>
        <StyledTableCell>
          <span>{new Date(data.created_at).toLocaleString()}</span>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default RowItem;
