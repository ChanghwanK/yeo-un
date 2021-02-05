import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return <Container>카드</Container>;
};

const Container = styled.div`
  display: flex;
  border: 1px solid #9e9e9e;
  border-radius: 15px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.13);
  justify-content: center;
  align-items: center;
  width: 18vw;
  height: 22vw;
  margin: 10px;
`;

export default Card;
