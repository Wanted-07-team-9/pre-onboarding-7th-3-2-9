import { useEffect } from 'react';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import toast from 'react-hot-toast';

import { BROKERS } from 'utils/DataEnum';
import AxiosRequest from 'core/services';
import { IMutateData, IUserData } from 'core/services/types';
import { getAccountNumber } from 'utils/GenerateData';
import { useMutateAccount } from 'core/services/hooks/useMutateAccount';
import { useFormattedNowDate } from 'core/services/hooks/useFormattedDate';

const CreateAccount = ({ dialogClose }: { dialogClose: () => void }) => {
  const { data: session } = useSession();
  const config = {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };

  const createMutate = useMutateAccount({
    method: 'post',
    config: {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  });

  const users = useQuery(
    ['users_order'],
    async () => {
      const { headers, data } = await AxiosRequest.get('/users?_sort=name', config);
      const mergedData = {
        totalCount: headers['x-total-count'] || 0,
        data: data,
      };
      return mergedData;
    },
    {
      select: ({ data }: { data: IUserData[] }) => data.map(({ id, name }) => ({ id, name })),
      enabled: !!session?.accessToken,
    }
  );
  const newDate = useFormattedNowDate();
  const onCreateSubmit = (values: IMutateData) => {
    const data = {
      ...values,
      uuid: crypto.randomUUID(),
      number: getAccountNumber(),
      status: 1,
      assets: '0',
      is_active: true,
      created_at: newDate,
      updated_at: newDate,
    };
    createMutate.mutate({ ...data });
  };

  useEffect(() => {
    if (createMutate.isSuccess) {
      toast.success('계좌가 생성되었습니다.');
      dialogClose();
    }
  }, [createMutate.isSuccess]);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          broker_id: '',
          user_id: '',
          payments: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          onCreateSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <CreateForm onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, minWidth: 208 }} size="small">
              <TextField
                name="name"
                label="계좌명"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                required
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 208 }} size="small">
              <InputLabel>고객명</InputLabel>
              <Select
                name="user_id"
                value={values.user_id}
                label="고객명"
                onChange={handleChange}
                MenuProps={{ style: { maxHeight: '300px' } }}
                displayEmpty
                required
              >
                <MenuItem value="">
                  <em>선택</em>
                </MenuItem>
                {users.data?.map(({ id, name }, index) => {
                  return (
                    <MenuItem key={index} value={id}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 208 }} size="small">
              <InputLabel>증권사</InputLabel>
              <Select
                name="broker_id"
                value={values.broker_id}
                label="증권사"
                onChange={handleChange}
                MenuProps={{ style: { maxHeight: '300px' } }}
                displayEmpty
                required
              >
                <MenuItem value="">
                  <em>선택</em>
                </MenuItem>
                {Object.keys(BROKERS).map((key, index) => {
                  return (
                    <MenuItem key={index} value={key}>
                      {BROKERS[key]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <TextField
                name="payments"
                type="number"
                label="초기 입금금액"
                value={values.payments}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                required
              />
            </FormControl>
            <div>
              <Button variant="contained" color="inherit" onClick={dialogClose}>
                취소
              </Button>
              <Button variant="contained" type="submit" color="success" disabled={isSubmitting}>
                계좌 등록
              </Button>
            </div>
          </CreateForm>
        )}
      </Formik>
    </>
  );
};
const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CreateAccount;
