import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Container>요기는 Footer 입니다.</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a5158;
  height: 300px;
  width: 100%;
  margin-top: 50px;
`;

export default Footer;
