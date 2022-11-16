import React from 'react';
import { useRouter } from 'next/router';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import RowItem from 'components/blocks/Accounts/RowItem';
import AccountFooter from 'components/blocks/Accounts/Footer';
import AccountFilterBar from 'components/blocks/Accounts/Filter';
import { ACCOUNT_COLUMN } from 'utils/DataEnum';

const Accounts = ({ data, isLoading }) => {
  const router = useRouter();

  const onRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const accountId = e.currentTarget.getAttribute('data-account-id');
    router.push(`accounts/${accountId}`);
  };

  const onNameClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    // console.log(e.target.getAttribute('data-user-id'));
    // toast.success('name Click!');
  };

  return (
    <>
      {isLoading || !data ? (
        <></>
      ) : (
        <>
          <AccountFilterBar />
          {/* <AccountTable /> */}
          <div style={{ margin: '10px 0' }}>
            <TableContainer component={Paper} sx={{ minHeight: 600, maxHeight: 600 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {ACCOUNT_COLUMN.map((val, index) => (
                      <TableCell key={index}>
                        <span>{val}</span>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.totalCount > 0 ? (
                    data.data?.map((row, index) => (
                      <RowItem
                        key={index}
                        data={row}
                        onRowClick={onRowClick}
                        onNameClick={onNameClick}
                      />
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} align="center">
                        <FontAwesomeIcon icon={faInbox} />
                        <span>데이터가 없습니다.</span>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <AccountFooter totalCount={data?.totalCount ? parseInt(data?.totalCount) : 0} />
        </>
      )}
    </>
  );
};
export default Accounts;
