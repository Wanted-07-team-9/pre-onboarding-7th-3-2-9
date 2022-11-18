import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Card } from '@mui/material';
import toast from 'react-hot-toast';

import { IAccountData } from 'core/services/types';
import AccountDetail from './AccountDetail';
import useAccountQuery from 'core/services/hooks/useAccountQuery';
import { useMutateAccount } from 'core/services/hooks/useMutateAccount';
import { useFormattedNowDate } from 'core/services/hooks/useFormattedDate';

const AccountDetailIndex = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const account_id = +router.query.id;
  const [isEdit, setIsEdit] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };
  const { data }: { data: IAccountData } = useAccountQuery({
    queryKey: ['account', account_id],
    url: `/accounts/${account_id}`,
    config,
    enabled: !!session?.accessToken,
  });

  const editMutate = useMutateAccount({
    method: 'patch',
    id: account_id,
    config: {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  });

  const deleteMutate = useMutateAccount({
    method: 'delete',
    id: account_id,
    config: {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  });

  const newDate = useFormattedNowDate();
  const onEditAccount = (values: { name: string; is_active: boolean }) => {
    editMutate.mutate({ ...values, updated_at: newDate });
  };

  const onDeleteAccount = () => {
    deleteMutate.mutate({ id: account_id });
  };

  useEffect(() => {
    if (editMutate.isSuccess) {
      toast.success('수정이 완료되었습니다.');
      setIsEdit(false);
    }
    if (deleteMutate.isSuccess) {
      const myPromise = router.push('/admin/accounts');
      toast.promise(myPromise, {
        loading: '삭제중...',
        success: '삭제 성공!',
        error: '삭제 실패',
      });
    }
  }, [router, editMutate.isSuccess, deleteMutate.isSuccess]);

  const props = {
    data: data,
    isEdit: isEdit,
    setIsEdit: setIsEdit,
    onEditAccount: onEditAccount,
    onDeleteAccount: onDeleteAccount,
  };
  return (
    <>
      <Card sx={{ maxWidth: 700, m: '0 auto' }}>
        <AccountDetail {...props} />
      </Card>
    </>
  );
};
export default AccountDetailIndex;
