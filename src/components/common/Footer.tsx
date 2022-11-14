import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;

  width: inherit;
  height: 72px;

  background-color: #9b9b9b;
`;

export default Footer;
