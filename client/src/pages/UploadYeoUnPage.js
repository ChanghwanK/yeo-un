import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';

const LoginPage = () => {
  // const [title, setTitle] = useState('');
  // const [contents, setContent] = useState('');
  const [category, setCategory] = useState('movie');

  const onSelectCategory = (e) => {
    setCategory(e.target.value);
  };

  const onClickSubmitButton = (e) => {
    const title = document.getElementsByName('title')[0].value.trim();
    const contents = document.getElementsByName('contents')[0].value.trim();
    console.log(title, contents, category);
  };

  return (
    <Container>
      <Logo />
      <HeaderText>여운 올리기</HeaderText>
      <p>제목</p>
      <Input name="title" placeholder="제목을 입력하세요" type="text" />
      카테고리
      <DropDown value={category} onChange={onSelectCategory} name="categories">
        <Option value="movie">영화</Option>
        <Option value="musical">뮤지컬</Option>
        <Option value="book">책</Option>
        <Option value="exhibition">전시회</Option>
      </DropDown>
      <p>컨텐츠</p>
      <Contents name="contents" placeholder="내용을 입력하세요" />
      <div>
        <Button onClick={onClickSubmitButton}>여운 남기기</Button>
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

const Contents = styled.textarea`
  width: 91%;
  resize: none;
  border: none;
  height: 500px;
  border: 1px solid black;
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

const DropDown = styled.select``;

const Option = styled.option``;

export default LoginPage;
