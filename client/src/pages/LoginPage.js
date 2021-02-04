import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Logo from 'components/Logo';

const LoginPage = (props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onChangeIdInput = (e) => {
    setId(e.target.value);
  };

  const onChangePwInput = (e) => {
    setPw(e.target.value);
  };

  const onClickSignInButton = () => {
    props.history.push('/signin');
  };

  return (
    <Container>
      <Logo />
      <HeaderText>로그인 페이지</HeaderText>
      <p>아이디</p>
      <Input onChange={onChangeIdInput} value={id} />
      <p>패스워드</p>
      <Input onChange={onChangePwInput} value={pw} />
      <div>
        <Button>로그인</Button>
        <Button onClick={onClickSignInButton}>회원가입</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  p {
    margin: 10px;
  }
`;

const Input = styled.input`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Button = styled.button`
  border: 1px solid black;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;

const HeaderText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export default withRouter(LoginPage);
