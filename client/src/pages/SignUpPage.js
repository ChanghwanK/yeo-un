import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Logo from 'components/Logo';

const SignUpPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const OnChangeIdInput = (e) => {
    setId(e.target.value);
  };

  const OnChangePwInput = (e) => {
    setPw(e.target.value);
  };

  const OnChangeCheckPwInput = (e) => {
    setCheckPw(e.target.value);
  };

  const OnChangeNameInput = (e) => {
    setName(e.target.value);
  };

  const OnChangeNicknameInput = (e) => {
    setNickname(e.target.value);
  };

  const OnChangeNumberInput = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeFile = (e) => {
    const reader = new FileReader();
    const tempfile = e.target.files[0];

    reader.readAsDataURL(tempfile);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  const onClickSignInButton = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', id);
    formData.append('password', pw);
    formData.append('name', name);
    formData.append('nickname', nickname);
    formData.append('profile_image', profileImage);
    formData.append('phone', phoneNumber);

    console.log(id, pw, name, nickname, profileImage, phoneNumber);

    // axios({
    //   method: 'post',
    //   url: '/api/dd',
    //   data: formData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });
  };

  return (
    <Container>
      <Logo />
      <HeaderText>회원가입 페이지</HeaderText>
      <Form>
        <p>이메일</p>
        <Input type="text" onChange={OnChangeIdInput} value={id} />

        <p>패스워드</p>
        <Input type="password" onChange={OnChangePwInput} value={pw} />

        <p>패스워드 확인</p>
        <Input
          type="password"
          onChange={OnChangeCheckPwInput}
          value={checkPw}
        />
        {pw === checkPw ? '같아요' : '달라요'}

        <p>이름</p>
        <Input type="text" onChange={OnChangeNameInput} value={name} />

        <p>닉네임</p>
        <Input type="text" onChange={OnChangeNicknameInput} value={nickname} />

        <p>프로필 사진</p>
        <Input
          type="file"
          name="thumbnail"
          accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
          onChange={onChangeFile}
        />
        {profileImage ? (
          <Image src={profileImage} alt="미리보기 이미지" />
        ) : (
          '썸네일을 올려주세요'
        )}

        <p>전화번호</p>
        <Input type="text" onChange={OnChangeNumberInput} value={phoneNumber} />
        <div>
          <Button onClick={onClickSignInButton}>가입하기</Button>
        </div>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export default SignUpPage;
