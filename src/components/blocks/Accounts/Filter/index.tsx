import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { Formik } from 'formik';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import { BROKERS, ACCOUNT_STATUS } from 'utils/DataEnum';
import { queriesState } from 'core/states';

const AccountFilterBar = () => {
  const router = useRouter();
  const [queries, setQueries] = useRecoilState(queriesState);

  const onFilterSubmit = (values: {
    broker: string;
    active: string;
    status: string;
    q: string;
  }) => {
    setQueries({ ...queries, page: 1, ...values });
    router.push(getAccountPath({ ...queries, page: 1, ...values }), undefined, { shallow: true });
  };

  return (
    <StyledFilterDiv>
      <Formik
        initialValues={{
          broker: queries.broker,
          active: queries.active,
          status: queries.status,
          q: queries.q,
        }}
        onSubmit={(values, { setSubmitting }) => {
          onFilterSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
              <InputLabel>증권사명</InputLabel>
              <Select
                name="broker"
                value={values.broker}
                label="전체"
                onChange={handleChange}
                MenuProps={{ style: { maxHeight: '300px' } }}
              >
                <MenuItem value="">
                  <em>전체</em>
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
            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
              <InputLabel>계좌 활성화 여부</InputLabel>
              <Select name="active" value={values.active} onChange={handleChange} displayEmpty>
                <MenuItem value="">
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={'true'}>활성</MenuItem>
                <MenuItem value={'false'}>비활성</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel>계좌 상태</InputLabel>
              <Select name="status" value={values.status} onChange={handleChange} displayEmpty>
                <MenuItem value="">
                  <em>전체</em>
                </MenuItem>
                {Object.keys(ACCOUNT_STATUS).map((key, index) => {
                  return (
                    <MenuItem key={index} value={key}>
                      {ACCOUNT_STATUS[key]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <TextField
                name="q"
                label="검색어"
                value={values.q}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
              />
            </FormControl>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              검색
            </Button>
          </form>
        )}
      </Formik>
    </StyledFilterDiv>
  );
};

const StyledFilterDiv = styled.div`
  float: right;

  button {
    margin: 8px;
  }
`;
export default AccountFilterBar;
