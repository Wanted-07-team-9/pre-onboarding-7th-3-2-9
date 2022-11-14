import styled from "styled-components"

export const HeaderLayout = styled.section`
  display:flex;
  position: static;
  background: var(--color-white);
  padding: 1%;
  text-align:center;
`
export const PageNameWrapper = styled.div`

`


export const LeftItem = styled.section`
  display:flex;
  text-align: center;
  align-items: center;
`

export const RightItem = styled.section`
    display:flex;
    text-align: center;
    align-items: center;
    margin-left: auto;
    font-weight: bold;
    font-size: 1.5rem;
`
export const UserInfo = styled.div`
  white-space:nowrap;
  margin: 0 1rem;
`

export const UserName = styled.div`
  background-color: #828282;
  padding:5%;
  white-space:nowrap;
  margin: 0 1rem;
`
export const BellWrapper = styled.div`
  position:relative;
`
export const Alarm = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  text-align:center;
  position: absolute;
  background-color:#EC5B55;
  color: var(--color-white);
  border-radius: 10px;
  padding:0.3rem;
  font-size: 1rem;
  bottom:15px;
  left:8px;
`