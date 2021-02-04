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
  // ~ 500
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  // 500 ~ 800
  @media screen and (min-width: 500px) and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  // 800 ~ 1100
  @media screen and (min-width: 800px) and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  // 1100 ~
  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default CardContainer;
