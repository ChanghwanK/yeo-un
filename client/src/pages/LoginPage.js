import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <HeaderText>로그인 페이지</HeaderText>
      <p>아이디</p>
      <Input />
      <p>패스워드</p>
      <Input />
      <div>
        <Button>로그인</Button>
        <Button>회원가입</Button>
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

export default LoginPage;
