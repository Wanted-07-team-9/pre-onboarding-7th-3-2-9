import styled from "styled-components"
export const Layout = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  text-align:center;
  width:100%;
  height: 100vh;
`


export const MainContainer = styled.section`
width:100%;
display:flex;
flex-direction: column;
align-items:center;
`
export const MainWrapper = styled.div`
  
`
export const StyledHeader = styled.section`
  display:flex; 
  align-items:center;
  margin:3rem;
  h1{
    margin-left: 1rem;
    font-size: 4rem;
    font-weight: bold;
  }
`


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