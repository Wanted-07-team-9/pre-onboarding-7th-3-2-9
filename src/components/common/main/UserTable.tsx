import React, { useEffect, useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import * as S from '../../../styles/TableStyle';
import { USER_COLUMNS } from '../../../utils/UserTableColumn';
import useUserService from '../../../hooks/useUserService';

const UserTable = () => {
  const { usersData } = useUserService();
  console.log(usersData);

  const USER_DATA = usersData;
  const columns = useMemo(() => USER_COLUMNS, []);
  const data = useMemo(() => (USER_DATA ? USER_DATA : []), [USER_DATA]);

  // console.log(BANK_DATA);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    nextPage,
    previousPage,
    canNextPage,
    page,
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

  useEffect(() => {
    setPageSize(20);
  }, [pageSize]);

  return (
    <>
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
            {/* Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '50px' }}
          /> */}
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
          style={{
            margin: '5px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        ></div>
      </S.TableLaytout>
    </>
  );
};

export default UserTable;
