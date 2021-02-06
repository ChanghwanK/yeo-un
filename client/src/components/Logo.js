import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import LogoImage from 'images/logo.png';

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <LogoContainer src={LogoImage} alt="logo" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  margin: 10px;

  font-size: 30px;
  cursor: pointer;
`;

const LogoContainer = styled.img`
  widht: 200px;
  height: 150px;
  object-fit: cover;
`;

export default Logo;
