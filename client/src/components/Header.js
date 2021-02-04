import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Left>
        <p>로고</p>
        <p>다른거</p>
      </Left>
      <Right>
        <p>검색창</p>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  display: flex;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  top: 0;
  height: 64px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.13);
`;

const Left = styled.div`
  display: flex;
  padding-left: 30px;
  p {
    margin: 20px;
  }
`;

const Right = styled.div`
  display: flex;
  padding-right: 50px;
  p {
    margin: 20px;
  }
`;

export default Header;
