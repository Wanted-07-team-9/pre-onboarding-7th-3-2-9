import { Formik } from 'formik';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { ACCOUNT_STATUS, BROKERS } from '../../../utils/dataUtils';
import * as S from '../../../styles/TableStyle';

function FilterButton({ onFilterSubmit }) {
  return (
    <S.FilterButtonStyle>
      <Formik
        initialValues={{ broker: '', active: '', status: '', searchText: '' }}
        onSubmit={(values, { setSubmitting }) => {
          onFilterSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select name="broker" value={values.broker} onChange={handleChange} displayEmpty>
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
              {/* <FormHelperText>증권사명</FormHelperText> */}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select name="active" value={values.active} onChange={handleChange} displayEmpty>
                <MenuItem value="">
                  <em>전체</em>
                </MenuItem>
                <MenuItem value={'true'}>활성</MenuItem>
                <MenuItem value={'false'}>비활성</MenuItem>
              </Select>
              {/* <FormHelperText>계좌 활성화 여부</FormHelperText> */}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
              {/* <FormHelperText>계좌 상태</FormHelperText> */}
            </FormControl>
            <FormControl sx={{ m: 1, maxHeight: 10, minWidth: 120 }} size="small">
              <TextField
                name="searchText"
                value={values.searchText}
                onChange={handleChange}
                placeholder="검색어 입력"
                size="small"
              ></TextField>
            </FormControl>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              검색
            </Button>
          </form>
        )}
      </Formik>
    </S.FilterButtonStyle>
  );
}

export default FilterButton;
