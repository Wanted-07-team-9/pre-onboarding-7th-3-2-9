import { styled } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { ACCOUNT_STATUS, BROKERS } from 'utils/DataEnum';
import { convertAccountNumber } from 'utils/DataFormatter';
import { convertCurrency, diffAsset } from 'utils/CurrencyFormatter';
import { useFormatLocaleDate } from 'core/services/hooks/useFormattedDate';

const StyledTableRow = styled(TableRow)(() => ({
  cursor: 'pointer',
}));

const RowItem = ({ data, onRowClick, onNameClick }) => {
  const diffColor = diffAsset(data.assets, data.payments);
  const number = convertAccountNumber(data.broker_id, data.number);

  const date = useFormatLocaleDate(data.created_at);

  return (
    <>
      <StyledTableRow hover onClick={onRowClick} data-account-id={data.id}>
        <TableCell component="th" scope="data">
          <span onClick={onNameClick} data-user-id={data.user_id}>
            {data.user_name}
          </span>
        </TableCell>
        <TableCell>
          <span>{BROKERS[data.broker_id]}</span>
        </TableCell>
        <TableCell>
          <span>{number}</span>
        </TableCell>
        <TableCell>
          <span>{ACCOUNT_STATUS[data.status]}</span>
        </TableCell>
        <TableCell>
          <span>{data.name}</span>
        </TableCell>
        <TableCell className={diffColor}>
          <span>{convertCurrency(data.assets)}</span>
        </TableCell>
        <TableCell>
          <span>{convertCurrency(data.payments)}</span>
        </TableCell>
        <TableCell>
          <span>{JSON.parse(data.is_active) ? '활성' : '비활성'}</span>
        </TableCell>
        <TableCell>
          <span>{date}</span>
        </TableCell>
      </StyledTableRow>
    </>
  );
};

export default RowItem;
