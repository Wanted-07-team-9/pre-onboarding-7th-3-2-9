import React, { useMemo } from 'react';
import { useAppSelector } from '../../../redux/reducer/hook';
import { usePagination, useTable } from 'react-table';
import * as S from '../../../styles/TableStyle';
import { COLUMNS } from '../../../utils/TableColumn';

const BankTable = () => {
  const { bankData } = useAppSelector(state => state.bankBoardData);
  const BANK_DATA = bankData;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => BANK_DATA, [BANK_DATA]);

  // console.log(BANK_DATA);

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
                    <td {...cell.getCellProps()} key={Math.random()}>
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
        <span>
          Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '50px' }}
          />
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
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}개 씩 보기
            </option>
          ))}
        </select>
      </div>
    </S.TableLaytout>
  );
};

export default BankTable;
