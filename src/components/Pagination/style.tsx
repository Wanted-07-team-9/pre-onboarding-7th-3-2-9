import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 3rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #0F253C;
  color: white;
  font-size: 1rem;
  
  &:hover {
    background: #468FF7;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  
  &[aria-current] {
    background: #5160EA;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;