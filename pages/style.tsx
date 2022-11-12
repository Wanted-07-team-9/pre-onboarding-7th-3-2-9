import styled from "styled-components"
export const Layout  = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  text-align:center;
  width:100%;
  height: 100vh;
`


export const MainContainer = styled.section`
width:33%;
display:flex;
flex-direction: column;
align-items:center;
background-color:var(--color-white);
box-shadow: 0 0 5px #333;
`

export const Title = styled.div`
text-align:left;
`

export const StyledForm = styled.form`
button{
  width:100%;
}
input{
  display: block;
margin: 5% 0;
}
`
