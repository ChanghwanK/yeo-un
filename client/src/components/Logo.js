import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Container>
      <Link to="/">로고</Link>
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

export default Logo;
