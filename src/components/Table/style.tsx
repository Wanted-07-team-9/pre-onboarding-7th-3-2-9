import styled from "styled-components"

export const TableWrapper = styled.section`
  background-color: #F0F2F5;
  height:100%;
`

export const TableLayout = styled.div`
  display:flex;
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
  width: 160rem;
	table-layout: fixed;
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
  tr{
    height: 1.5rem;
  }
  thead th {
  padding: 0.5rem;
}
  a{
    text-decoration:none;
    color: inherit;
  }
  td{
    line-height: 16px;
    padding : 0.3rem 0.5rem;
    text-align: right;
    &.broker{
      :hover{
        cursor: pointer;
      }
    }
  }
  tr.data{
    :hover{
      background-color : #EEE6C4;
    }
  }
  th{
    border: 1px solid #D9D9D9
  }
`

