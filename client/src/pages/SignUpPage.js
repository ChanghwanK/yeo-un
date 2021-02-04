import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';

const SignUpPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [profileImage, setProfileImage] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

  const OnChangeIdInput = (e) => {
    setId(e.target.value);
  };

  const OnChangePwInput = (e) => {
    setPw(e.target.value);
  };

  return (
    <Container>
      <Logo />
      <HeaderText>회원가입 페이지</HeaderText>
      <p>이메일</p>
      <Input type="text" onChange={OnChangeIdInput} value={id} />
      <p>패스워드</p>
      <Input type="password" onChange={OnChangePwInput} value={pw} />
      {/* <p>이름</p>
      <Input type="text" onChange={OnChangeIdInput} value={id} />
      <p>닉네임</p>
      <Input type="text" onChange={OnChangeIdInput} value={id} />
      <p>프로필 사진</p>
      <Input type="text" onChange={OnChangeIdInput} value={id} />
      <p>전화번호</p>
      <Input type="text" onChange={OnChangeIdInput} value={id} /> */}
      <div>
        <Button>가입하기</Button>
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

export default SignUpPage;
