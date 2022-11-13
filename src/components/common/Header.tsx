import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;

  width: inherit;
  height: 72px;

  background-color: #9b9b9b;
`;

export default Header;
