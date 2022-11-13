import React from 'react';
import styled from 'styled-components';

const Login = ({ onSubmit }) => {
  
  return (
    <StyledDiv>
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form onSubmit={onSubmit}>
        <label>
          이메일 :
          <input type="email" name="email" placeholder="이메일 주소" />
        </label>
        <label>
          비밀번호 :
          <input type="password" name="password" />
        </label>
        <button type="submit">로그인</button>
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 400px;
  margin: 0 auto;
  border-radius: 1.25rem;
  background: #fff;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 6px;
  }
  h3 {
    color: #837f90;
    margin: 0 0 40px;
    font-weight: 500;
    font-size: 1rem;
  }

  form {
    width: 100%;
    margin: 0;
    display: grid;
    gap: 16px;

    > div {
      position: relative;
    }
  }
`;

export default Login;
