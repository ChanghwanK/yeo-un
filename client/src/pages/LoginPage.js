import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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

  const onClickLoginButton = () => {
    // if (id !== '' && pw !== '') {
    //   axios({
    //     // url: 'https://test/api/cafe/list/today',
    //     method: 'post',
    //     data: {
    //       email: id,
    //       password: pw,
    //     },
    //   });
    // }
  };

  return (
    <Container>
      <Logo />
      <HeaderText>Welcome :)</HeaderText>
      <Cover>
        <p>email</p>
        <Input type="text" onChange={onChangeIdInput} value={id} />
        <p>password</p>
        <Input type="password" onChange={onChangePwInput} value={pw} />
        <div>
          <Button>Login</Button>
          <Button onClick={onClickSignInButton}>Sign Up</Button>
        </div>
      </Cover>
    </Container>
  );
};

const Cover = styled.div`
  border: 5px solid black;
  margin: 30px;
  padding: 30px;
`;

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
