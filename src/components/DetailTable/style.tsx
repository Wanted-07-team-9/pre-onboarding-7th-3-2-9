import styled from "styled-components"

export const DetailWrapper = styled.section`
  display:flex;
  justify-content:center;
  margin: 0 2rem;
  border: 4px solid #051528;
  border-radius: 2rem;
  padding: 3rem;

`

export const FlexWrapper = styled.section`
  display:flex;
  flex-direction:column;
`
export const CellWrapper = styled.section`
  display:flex;
  width:100%;
  height:100%;
  align-items: center;
  white-space: nowrap;
  font-size: 3rem;
  padding: 1rem;
  div{
    width:100%;
    height:100%;
    /* background-color:#ffffff; */
    text-align: right;
    padding: 1rem;
  }
  .category{
    font-weight: bold;;
    background-color: #F0F2F5;
    text-align: left;
  }
`