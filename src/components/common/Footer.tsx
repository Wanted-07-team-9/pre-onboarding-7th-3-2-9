import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>Copyright © December and Company Inc.</StyledFooter>;
};

const StyledFooter = styled.footer`
  position: static;
  height: 64px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px -2px 4px -1px rgb(0 0 0 / 0%), 0px -4px 5px 0px rgb(0 0 0 / 14%),
    0px -1px 10px 0px rgb(0 0 0 / 12%);
`;

export default Footer;
