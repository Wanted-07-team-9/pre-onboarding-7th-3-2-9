import styled from "styled-components";

export const EditFormWrapper = styled.section`
  display:flex;
  justify-content:center;
`

export const FormWrapper = styled.section`
  display:flex;
  section{
    display:flex;
    flex-direction: column;
  }
`

export const ColumnSection = styled.section`
  margin: 1rem;
`

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  min-height:3.5rem;
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
  div{
    font-size : 1.5rem;
  }
`


export const EventWrapper = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 1rem;
  button{
    margin-bottom: 1.5rem;
    background-color: #5160EA;
    color : var(--color-white);
    border-radius:2rem;
    padding: 0.5rem;
    border: none;
    :hover{
      cursor: pointer;
      background-color: var(--color-blue);;
    }
    &#delete{
      background-color: tomato;
      :hover{
      cursor: pointer;
      background-color: orange;
    }
    }
  }
`