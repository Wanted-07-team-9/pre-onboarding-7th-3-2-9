import React from 'react';
import Image from 'next/image';

import { Formik } from 'formik';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import LogoImage from 'assets/logo.png';

interface ILogin {
  onSubmit: (values: { email: string; password: string }) => Promise<void>;
}

const Login = ({ onSubmit }: ILogin) => {
  return (
    <StyledDiv>
      <div>
        <span className="logo_image">
          <Image src={LogoImage} alt="Logo" placeholder="blur" width={41} height={41} />
        </span>
        <span>
          <h2>PREFACE</h2>
        </span>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <TextField
                type="email"
                name="email"
                label="이메일"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                required
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <TextField
                type="password"
                name="password"
                label="비밀번호"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                required
              />
            </FormControl>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              로그인
            </Button>
          </form>
        )}
      </Formik>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 20vw;
  height: 50vh;
  margin: 20vh auto 0 auto;
  border-radius: 1.25rem;
  padding: 2em;
  text-align: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30%;

    > span {
      margin: 0 0.4em;
    }
    h2 {
      font-size: 36px;
      font-weight: 600;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 70%;
    margin: 0;
    gap: 16px;

    > div {
      position: relative;
    }

    button {
      min-height: 45px;
      margin: 0 0.4em;

      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export default Login;
