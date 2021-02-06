import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LoginContext from 'contexts/LoginContext';
import SearchInput from 'components/header/searchbox/SearchInput';
import Logo from 'images/logo.png';

const Header = () => {
  const [state, action] = useContext(LoginContext);

  const onClickLogOutButton = () => {
    action.setLogined(false);
    window.localStorage.removeItem('id');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Container>
      <Left>
        <LogoContainer src={Logo} alt="logo" />
        {window.localStorage.getItem('id') ? (
          <p>
            <Link to="/upload">여운 올리기</Link>
          </p>
        ) : (
          <p>
            <Link to="/upload">여운 올리기</Link>
          </p>
        )}
      </Left>
      <Right>
        <SearchInput />
        {window.localStorage.getItem('id') ? (
          <LogOutButton onClick={onClickLogOutButton}>로그아웃</LogOutButton>
        ) : (
          <p>
            <Link to="/login">로그인</Link>
          </p>
        )}
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
  height: 100px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.13);
`;

const Left = styled.div`
  display: flex;
  padding-left: 30px;
  justify-content: center;
  align-items: center;
  p {
    padding-left: 30px;
    cursor: pointer;
    text-decoration: none;
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

const LogoContainer = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
`;

const LogOutButton = styled.button``;

export default Header;
