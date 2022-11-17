import styled from "styled-components";

export const FormWrapper = styled.section`
  display:flex;
  section{
    display:flex;
    flex-direction: column;
  }
  button{
    margin-top: auto;
    height:100%;
    margin-bottom: 1.5rem;
    background-color: #5160EA;
    color : white;
    border-radius:2rem;
    padding: 0.5rem;
    border: none;
    :hover{
      cursor: pointer;
    }
  }
`
export const EditFormWrapper = styled.section`
  display:flex;
  justify-content:center;
`

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label{
    display: inline-block ;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  input{
    display: inline-block ;
  }
  select{
    display: inline-block ;
  }
`

export const ColumnSection = styled.section`
  margin: 1rem;
`