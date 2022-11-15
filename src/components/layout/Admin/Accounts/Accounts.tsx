import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SelectChangeEvent } from '@mui/material/Select';

import useReactQueries from 'core/services/hooks/useReactQueries';
import RowItem from 'components/blocks/Accounts/RowItem';
import AccountFooter from 'components/blocks/Accounts/Footer';
import toast from 'react-hot-toast';
import AccountFilterBar from 'components/blocks/Accounts/Filter';

interface ITest {
  broker: string;
  active: string;
  status: string;
  searchText: string;
}

const Accounts = () => {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const [limit, setLimit] = useState(parseInt(router.query.limit) || 10);
  const [filter, setFilter] = useState<ITest>({});

  const { data: session } = useSession();

  // useEffect(() => {
  //   const expires = new Date(session?.expires);
  //   const now = new Date();
  //   if (now > expires) {
  //     toast.error('세션이 만료되어 로그인 화면으로 이동합니다.');
  //     setTimeout(() => router.push("/"), 700);
  //   }
  // }, [session, router]);

  const { data } = useReactQueries([
    {
      queryKey: [
        'accounts',
        page,
        limit,
        filter.broker,
        filter.active,
        filter.status,
        filter.searchText,
      ],
      url: '/accounts',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      params: {
        _page: page,
        _limit: limit,
        broker_id_like: filter.broker,
        is_active_like: filter.active,
        status_like: filter.status,
        q: filter.searchText,
      },
      enabled: !!session?.accessToken,
    },
    {
      queryKey: ['users'],
      url: '/users',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      enabled: !!session?.accessToken,
    },
  ]);

  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    router.push(`accounts/?page=${page}&limit=${limit}`, undefined, { shallow: true });
  };

  const onLimitChange = (e: SelectChangeEvent) => {
    setLimit(e.target.value);
    router.push(`accounts/?page=${page}&limit=${e.target.value}`, undefined, { shallow: true });
  };

  const onRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const accountId = e.currentTarget.getAttribute('data-account-id');
    toast.success('row Click!');
    router.push(`accounts/${accountId}`);
  };

  const onNameClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log(e.target.getAttribute('data-user-id'));
    e.stopPropagation();
    toast.success('name Click!');
  };

  const onFilterSubmit = (values: {
    broker: string;
    active: string;
    status: string;
    searchText: string;
  }) => {
    console.log(values);
    setFilter(values);
  };

  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);
  // const [test, setTest] = useState("");

  return (
    <>
      <AccountFilterBar onFilterSubmit={onFilterSubmit} />
      <TableContainer component={Paper} sx={{ maxHeight: 590 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span>고객명</span>
              </TableCell>
              <TableCell>
                <span>증권사</span>
              </TableCell>
              <TableCell>
                <span>계좌번호</span>
              </TableCell>
              <TableCell>
                <span>계좌상태</span>
              </TableCell>
              <TableCell>
                <span>계좌명</span>
              </TableCell>
              <TableCell>
                <span>평가금액</span>
              </TableCell>
              <TableCell>
                <span>입금금액</span>
              </TableCell>
              <TableCell>
                <span>계좌활성여부</span>
              </TableCell>
              <TableCell>
                <span>계좌개설일</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data?.map((row, index) => (
              <RowItem key={index} data={row} onRowClick={onRowClick} onNameClick={onNameClick} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AccountFooter
        page={page}
        limit={limit}
        totalCount={data?.totalCount ? Math.round(parseInt(data?.totalCount) / limit) : 0}
        onLimitChange={onLimitChange}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Accounts;
