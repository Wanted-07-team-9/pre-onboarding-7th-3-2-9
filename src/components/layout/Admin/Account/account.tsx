import React from 'react';

import {
  Body,
  Cell,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from '@table-library/react-table-library';
import { usePagination } from '@table-library/react-table-library/pagination';
import { MiddlewareFunction } from '@table-library/react-table-library/types/common';
import { useSession } from 'next-auth/react';
import Axios from 'core/apis/axiosInstance';

const Account = () => {
  const nodes = [
    {
      id: '1',
      user_id: '1',
      uuid: '9884d17d-4d31-4f9e-9b96-9e1fb78037d3',
      broker_id: '247',
      status: '2',
      number: '483465314542',
      name: 'Investment Account',
      assets: '625649866.57',
      payments: '166081337.02',
      is_active: true,
      created_at: '2020-06-05T20:20:25.672Z',
      updated_at: '2021-06-27T12:27:57.163Z',
    },
    {
      id: '2',
      user_id: '1',
      uuid: '641c70bf-c3a3-4abb-bf0c-1d57b43b949d',
      broker_id: '280',
      status: '3',
      number: '797684121343',
      name: 'Investment Account',
      assets: '454008628.81',
      payments: '192248449.91',
      is_active: true,
      created_at: '2019-07-24T17:10:07.788Z',
      updated_at: '2019-10-22T17:35:06.661Z',
    },
    {
      id: '3',
      user_id: '1',
      uuid: '5e8f81db-394d-42d7-bf02-2c63d3c0f9f4',
      broker_id: '266',
      status: '3',
      number: '974727983763',
      name: 'Checking Account',
      assets: '92301311.71',
      payments: '820417433.77',
      is_active: true,
      created_at: '2020-08-26T14:05:51.534Z',
      updated_at: '2021-01-02T05:55:33.898Z',
    },
    {
      id: '4',
      user_id: '1',
      uuid: 'a3e5a521-d54c-4006-bb62-8a7899249aef',
      broker_id: '271',
      status: '1',
      number: '541372778220',
      name: 'Auto Loan Account',
      assets: '287745927.22',
      payments: '219423017.61',
      is_active: true,
      created_at: '2020-12-11T17:21:04.268Z',
      updated_at: '2020-10-26T11:16:16.073Z',
    },
    {
      id: '5',
      user_id: '1',
      uuid: '3c8455c9-aa52-4eff-95b1-5f604ba698f4',
      broker_id: '287',
      status: '1',
      number: '966133182066',
      name: 'Personal Loan Account',
      assets: '701517212.22',
      payments: '57967627.54',
      is_active: false,
      created_at: '2022-02-02T07:18:19.909Z',
      updated_at: '2021-11-08T13:28:12.958Z',
    },
  ];
  const data = { nodes };

  const onPaginationChange: MiddlewareFunction = (action, state) => {
    console.log(action, state);
  };

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 2,
    },
    onChange: onPaginationChange,
  });

  const sizes = [1, 2, 5];

  const session = useSession();

  const onClick = async () => {
    const data = session.data;
    const response = await Axios.get(`/accounts?_page=1`, {
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    console.log(response);
  };

  return (
    <>
      <button onClick={onClick}>테스트용</button>
      <Table data={data} pagination={pagination}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>고객명</HeaderCell>
                <HeaderCell>증권사</HeaderCell>
                <HeaderCell>계좌번호</HeaderCell>
                <HeaderCell>계좌상태</HeaderCell>
                <HeaderCell>계좌명</HeaderCell>
                <HeaderCell>평가금액</HeaderCell>
                <HeaderCell>입금금액</HeaderCell>
                <HeaderCell>계좌활성여부</HeaderCell>
                <HeaderCell>계좌개설일</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  <Cell>{item.user_id}</Cell>
                  <Cell>
                    {item.broker_id}
                    {/* {item.deadline.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })} */}
                  </Cell>
                  <Cell>{item.number}</Cell>
                  <Cell>{item.status}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.assets}</Cell>
                  <Cell>{item.payments}</Cell>
                  <Cell>{item.is_active}</Cell>
                  <Cell>{item.created_at}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          Page Size:{' '}
          {sizes.map(size => (
            <button
              key={size}
              type="button"
              style={{
                fontWeight: pagination.state.size === size ? 'bold' : 'normal',
              }}
              onClick={() => pagination.fns.onSetSize(size)}
            >
              {size}
            </button>
          ))}
          <button
            type="button"
            style={{
              fontWeight: pagination.state.size === nodes.length ? 'bold' : 'normal',
            }}
            onClick={() => pagination.fns.onSetSize(nodes.length)}
          >
            All
          </button>
        </span>

        {/* <span>
          Page:{' '}
          {pagination.state.getPages(data.nodes).map((_, index) => (
            <button
              key={index}
              type="button"
              style={{
                fontWeight: pagination.state.page === index ? 'bold' : 'normal',
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </span> */}
      </div>
    </>
  );
};

export default Account;
