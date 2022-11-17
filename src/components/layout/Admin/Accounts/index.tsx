import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';

import Accounts from './Accounts';
import useAccountsQueries from 'core/services/hooks/useAccountsQueries';
import { queriesState } from 'core/states';

const AccountIndex = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [queries, setQueries] = useRecoilState(queriesState);

  const { broker = '', active = '', status = '', q = '', ...pages } = router.query;
  const page = pages.page ? +pages.page : 1;
  const limit = pages.limit ? +pages.limit : 10;

  useEffect(() => {
    if (page && limit) {
      setQueries({ ...queries, page: page, limit: limit });
    }
  }, [router]);

  const { data, isLoading } = useAccountsQueries([
    {
      queryKey: [
        'accounts',
        page ? page : queries.page,
        limit ? limit : queries.limit,
        broker ? broker.toString() : queries.broker,
        active ? active.toString() : queries.active,
        status ? status.toString() : queries.status,
        q ? q.toString() : queries.q,
      ],
      url: '/accounts',
      config: {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
        params: {
          _page: page ? page : queries.page,
          _limit: limit ? limit : queries.limit,
          broker_id_like: broker ? broker : queries.broker,
          is_active_like: active ? active : queries.active,
          status_like: status ? status : queries.status,
          q: q ? q.toString() : queries.q,
        },
      },
      enabled: !!session?.accessToken,
    },
    {
      queryKey: ['users'],
      url: '/users',
      config: {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      },
      enabled: !!session?.accessToken,
    },
  ]);

  return (
    <>
      <Accounts data={data} isLoading={isLoading} />
    </>
  );
};

export default AccountIndex;
