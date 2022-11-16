import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card } from '@mui/material';
import toast from 'react-hot-toast';

import AxiosRequest from 'core/services';
import AccountDetail from './AccountDetail';
import useReactQuery from 'core/services/hooks/useReactQuery';

export interface IDetailData {
  id: number;
  user_id: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user_name: string;
}

const AccountDetailIndex = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const [isEdit, setIsEdit] = useState(false);

  const { data }: { data: IDetailData } = useReactQuery({
    queryKey: ['account', router.query.id],
    url: `/accounts/${router.query.id}`,
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
    enabled: !!session?.accessToken,
  });

  const { mutate, isSuccess } = useMutation({
    mutationFn: data => {
      return AxiosRequest.patch(
        `/accounts/${router.query.id}`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
    },
    onSuccess: data => {
      console.log(data);
      queryClient.setQueryData(['account', router.query.id], oldData =>
        oldData
          ? {
              ...oldData,
              name: data.data.name,
            }
          : oldData
      );
    },
  });

  const onEditName = (values: { name: string }) => {
    mutate({ id: data.id, name: values.name });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('수정이 완료되었습니다.');
      setIsEdit(false);
    }
  }, [isSuccess]);

  return (
    <>
      <Card sx={{ maxWidth: 700 }}>
        <AccountDetail data={data} onEditName={onEditName} isEdit={isEdit} setIsEdit={setIsEdit} />
      </Card>
    </>
  );
};
export default AccountDetailIndex;
