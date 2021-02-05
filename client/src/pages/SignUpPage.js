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
      <HeaderText>Join yeo-un</HeaderText>
      <Border>
        <Form>
          <p>이메일(Email)</p>
          <Input type="text" onChange={OnChangeIdInput} value={id} />

          <p>비밀번호(Password)</p>
          <Input type="password" onChange={OnChangePwInput} value={pw} />

          <p>비밀번호 확인(Confirm password)</p>
          <Input
            type="password"
            onChange={OnChangeCheckPwInput}
            value={checkPw}
          />
          <Boolpw>{pw === checkPw ? 'Correct' : 'Wrong'}</Boolpw>
          <p>이름(Name)</p>
          <Input type="text" onChange={OnChangeNameInput} value={name} />

          <p>닉네임(Nickname)</p>
          <Input
            type="text"
            onChange={OnChangeNicknameInput}
            value={nickname}
          />

          <p>프로필 사진(Profile picture)</p>
          <Input
            type="file"
            name="thumbnail"
            accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
            onChange={onChangeFile}
          />
          <Boolpw>
            {profileImage ? (
              <Image src={profileImage} alt="미리보기 이미지" />
            ) : (
              '썸네일을 올려주세요'
            )}
          </Boolpw>

          <p>전화번호(Phone number)</p>
          <Input
            type="text"
            onChange={OnChangeNumberInput}
            value={phoneNumber}
          />
          <div>
            <Button onClick={onClickSignInButton}>가입하기</Button>
          </div>
        </Form>
      </Border>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 140vh;
  justify-content: center;
  align-items: center;

  p {
    margin: 10px;
  }
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130vh;
  background-color: #f7f7f7;
  border-radius: 10px;
`;

const Boolpw = styled.p`
  color: red;
`;

const Input = styled.input`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
`;

const Button = styled.button`
  border: 1px solid black;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #37373d;
  color: white;
`;

const HeaderText = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

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
