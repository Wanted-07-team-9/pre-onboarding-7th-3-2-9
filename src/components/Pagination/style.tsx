import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 2rem 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: var(--color-navy);
  color: var(--color-white);
  font-size: 1rem;
  &:hover {
    background: var(--color-blue);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  &.selected {
    background: #5160EA;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;