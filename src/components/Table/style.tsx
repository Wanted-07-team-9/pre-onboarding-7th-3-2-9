import styled from "styled-components"

export const TableWrapper = styled.section`
  background-color: #F0F2F5;
  height:100%;
`

export const TableLayout = styled.div`
  display:flex;
  justify-content:center;
  min-height: 40rem;
`
export const StyledTd = styled.td`
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

export const StyledTable = styled.table`
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
    :hover{
      cursor: pointer;
      color : #5160EA;
    }
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

