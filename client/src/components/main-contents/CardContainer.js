import React from 'react';
import styled from 'styled-components';

const CardContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  row-gap: 40px;
  align-items: center;
  justify-items: center;
`;

export default CardContainer;
