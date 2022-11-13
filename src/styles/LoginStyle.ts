import styled from 'styled-components';

export const LoginPageLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const LoinBox = styled.div`
  position: relative;
  background-color: #fff;
  padding: 30px;
  width: 400px;
  height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LoginTio = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #eee;
  height: 50px;
`;

export const LoginForm = styled.form`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 100%;
    margin-top: 20px;
    display: flex;
    border: 1px solid #000;
    border-radius: 5px;
    height: 30px;
    padding: 5px;
  }

  input {
    margin-left: 10px;
    width: 90%;
    border: none;
    outline: none;
  }

  button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border: 1px solid #aaa;
    border-radius: 5px;
    color: #888;
    cursor: pointer;
  }
`;
