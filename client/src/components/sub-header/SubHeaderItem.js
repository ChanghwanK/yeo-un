import React from 'react';
import styled from 'styled-components';

const SubHeaderItem = ({ children, color }) => {
  return (
    <Container color={color}>
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  height: 700px;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
`;

export default SubHeaderItem;
