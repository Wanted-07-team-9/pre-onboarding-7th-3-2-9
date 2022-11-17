import styled from "styled-components"

export const StyledTd = styled.div`
  &.zero{
    color: black;
  }
  &.plus{
    color : red;
  }
  &.minus{
    color : blue;
  }
`

export const StyledTable = styled.thead`
  font-size: 1.5rem;
  thead:before {
    content:"@";
    display:block;
    line-height:10px;
    text-indent:-99999px;
}
  thead{
    font-weight: bold;
    background-color : #FAFAFA;
  }
  thead th {
  padding: 0.5rem;
}
  a{
    text-decoration:none;
    color: inherit;
  }
  td{
    padding : 0.3rem 0.5rem;
    text-align: right;
  }
  th{
    border: 1px solid #D9D9D9
  }
  tbody:before {
    content:"@";
    display:block;
    line-height:10px;
    text-indent:-99999px;
}
`

export const TableLayout = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
`