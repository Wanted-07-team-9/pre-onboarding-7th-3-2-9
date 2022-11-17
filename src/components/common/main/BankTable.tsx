import React, { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import * as S from '../../../styles/TableStyle';
import { COLUMNS } from '../../../utils/TableColumn';
import useMainService from '../../../hooks/useMainService';
// import { useQuery } from '@tanstack/react-query';
// import { useMain } from '../../../pages/main';

const BankTable = () => {
  const { accountData, isLoading } = useMainService();

  console.log(accountData);

  const BANK_DATA = accountData;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => (BANK_DATA ? BANK_DATA : []), [BANK_DATA]);

  const onIdClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute('id'));
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;

  if (isLoading) return 'Loading....';

  return (
    <S.TableLaytout className="table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} key={Math.random()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={Math.random()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} key={Math.random()} onClick={onIdClick}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className="table-pagination"
        style={{ margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          <strong style={{ display: 'block', width: '100px', textAlign: 'center' }}>
            {pageIndex + 1} / {pageOptions.length}
          </strong>
        </span>

        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
      <div
        className="table-pagesize"
        style={{ margin: '5px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
      >
        {/* <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}개 씩 보기
            </option>
          ))}
        </select> */}
      </div>
    </S.TableLaytout>
  );
};

export default BankTable;
