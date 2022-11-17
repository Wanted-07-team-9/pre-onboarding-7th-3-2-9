import React from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';
import Select from '@mui/material/Select';

function DetailEdit({ onFilterSubmit }) {
  return (
    <div>
      <Formik
        initialValues={{ status: '' }}
        onSubmit={(values, { setSubmitting }) => {
          onFilterSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange }) => (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select name="active" value={values.active} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>선택</em>
              </MenuItem>
              <MenuItem value={'true'}>활성</MenuItem>
              <MenuItem value={'false'}>비활성</MenuItem>
            </Select>
            {/* <FormHelperText>계좌 활성화 여부</FormHelperText> */}
          </FormControl>
        )}
      </Formik>
    </div>
  );
}

export default DetailEdit;
