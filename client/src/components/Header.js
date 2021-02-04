import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Left>
        <p>로고</p>
        <p>다른거</p>
      </Left>
      <Right>
        <p>검색창</p>
        {/* 로그인이 되었으면 다른 것으로 변경해서 보여줘야함
            login ? 로그인 : 로그아웃
        */}
        <p>
          <Link to="/login">로그인</Link>
        </p>
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
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  padding-right: 50px;
  p {
    margin: 20px;
    cursor: pointer;
  }
`;

export default Header;
