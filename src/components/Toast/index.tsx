import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
  return(
    <StyledContainer />
  )
}

const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    font-size: 1.5rem;
    text-align:left;
    background-color: var(--color-navy);
    color: var(--color-white);
    font-weight: bold;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background-color:#5160EA;
  }
`;

export default Toast