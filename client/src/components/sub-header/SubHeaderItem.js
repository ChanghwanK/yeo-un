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
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
  font-family: 'Noto Sans KR', sans-serif;
`;

export default SubHeaderItem;
