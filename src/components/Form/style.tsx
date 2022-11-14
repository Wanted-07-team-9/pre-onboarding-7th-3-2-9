import styled from "styled-components"
export const StyledForm = styled.form`
  background-color:var(--color-white);
  box-shadow: 0 0 5px #333;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  padding:0 5%;

button{
  width:100%;
  margin: 0 0 5% 0;
  border: 1px solid #e2e2e2;
  color: #9e9e9e;
}
input{
  width:100%;
  display: block;
  margin: 5% 0;
  border: 1px solid #e2e2e2;
  color: #9e9e9e;
}
`

export const LoginText = styled.div`
width:100%;
text-align:left;
background-color:#EFF2F5;
padding:5%;
svg{
  margin-right: 10px;
}
`

export const ImgWrapper= styled.span`
  margin-right: 3%;
`