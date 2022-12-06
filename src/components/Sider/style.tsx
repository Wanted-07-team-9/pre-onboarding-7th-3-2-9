import styled from "styled-components"

export const SiderLayout = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color:var(--color-black);
  color:var(--color-white);
  height:100vh;
  width:21rem;
  
  li{
    font-size: 1.3rem;
    color:#9e9e9e;
    padding: 1.5rem;
    :hover{
      cursor: pointer;
    }
    &.selected{
      color:var(--color-white);
      background-color: var(--color-blue);
    }
  }
;`

export const StyledA = styled.a`
  &.selected{
    background-color: var(--color-blue);
  }
  &.list{
    margin-left: 5%;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  align-items:center;
  div{
    font-weight: bold;
    font-size: 3rem;
  }
`

export const ImgWrapper = styled.span`
  margin-right: 2%;
  &.arrow{
    margin-right: 0;
    margin-left: 2%;
  }
`