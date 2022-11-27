import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content:center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
export const Background = styled.div`
    position: fixed;
    width:100%;
    height: 100%;
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ModalBlock = styled.div`
    position: absolute;
    top: 20%;
    border-radius: 10px;
    padding: 1.5rem;
    background-color: #5160EA;
    @media (max-width: 1120px) {
        width: 50rem;
    }
    @media (max-width: 50rem) {
        width: 80%;
    }
    min-height: 18rem;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;


export const EventWrapper = styled.span`
    display:flex;
    padding: 1rem;
    button{
    cursor: pointer;
    margin-left: auto;
    background-color: var(--color-blue);
    color : var(--color-white);
    border-radius:2rem;
    padding: 0.7rem;
    border: none;
    }
    .cancel{
      background-color:tomato;
    }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content:right;
  padding: 1rem; 
`
export const LabelWrapper = styled.div`
  display:flex;
  width:100%;
  margin-right: 1rem;
  align-items:center;
  label{
    font-size: 1.2rem;
    font-weight: bold;
    color : #E0E0E0;
  }
`