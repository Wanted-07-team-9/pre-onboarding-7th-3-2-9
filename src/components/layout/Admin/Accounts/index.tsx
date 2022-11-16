import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';

import Accounts from './Accounts';
import useReactQueries from 'core/services/hooks/useReactQueries';
import { queriesState } from 'core/states';

const AccountIndex = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [queries, setQueries] = useRecoilState(queriesState);
  const { page, limit, broker, active, status, q } = router.query;

  useEffect(() => {
    if (page && limit) {
      setQueries({ ...queries, page: parseInt(page), limit: parseInt(limit) });
    }
  }, [router]);

  const { data, isLoading } = useReactQueries([
    {
      queryKey: [
        'accounts',
        page ? page : queries.page,
        limit ? limit : queries.limit,
        broker ? broker : queries.broker,
        active ? active : queries.active,
        status ? status : queries.status,
        q ? q : queries.q,
      ],
      url: '/accounts',
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      params: {
        _page: page ? page : queries.page,
        _limit: limit ? limit : queries.limit,
        broker_id_like: broker ? broker : queries.broker,
        is_active_like: active ? active : queries.active,
        status_like: status ? status : queries.status,
        q: q ? q : queries.q,
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
  return (
    <>
      <Accounts data={data} isLoading={isLoading} />
    </>
  );
};

export default AccountIndex;
