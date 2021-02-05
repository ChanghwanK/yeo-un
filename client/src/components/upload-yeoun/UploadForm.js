import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import UploadContext from 'contexts/UploadContext';

const UploadForm = () => {
  const [category, setCategory] = useState('movie');
  const [file, setFile] = useState('');
  const [fileURL, setFileURL] = useState('');

  const [state, actions] = useContext(UploadContext);

  const onSelectCategory = (e) => {
    setCategory(e.target.value);
    actions.setPreviewCategory(e.target.value);
  };

  const onChangeContent = (e) => {
    actions.setPreviewContent(e.target.value);
  };

  const onChangeTitle = (e) => {
    actions.setPreviewTitle(e.target.value);
  };

  const onClickSubmitButton = (e) => {
    e.preventDefault();
    const title = document.getElementsByName('title')[0].value.trim();
    const contents = document.getElementsByName('contents')[0].value.trim();
    const time = moment().format('YYYY-MM-DD hh:mm');
    // const fileName = file[0]['uploadedFile'].name;

    // console.log(fileName, fileURL);
    // console.log(title, contents, category);
    // console.log(time);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', contents);
    formData.append('created_at', time);
    // formData.append('modified_at', );
    formData.append('like_count', 0);
    formData.append('view_count', 0);
    // formData.append('user_id', );
    formData.append('category_id', category);
    formData.append('thumbnail', fileURL);

    // axios({
    //   method: 'post',
    //   url: '/api/dd',
    //   data: formData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });
  };

  const onChangeFile = (e) => {
    const reader = new FileReader();
    const tempfile = e.target.files[0];

    reader.readAsDataURL(tempfile);
    reader.onloadend = () => {
      setFile([...file, { uploadedFile: tempfile }]);
      setFileURL(reader.result);
      actions.setPreviewThumbnail(reader.result);
    };
  };

  return (
    <Container>
      <Form encType="multipart/form-data">
        <HeaderInput
          name="title"
          placeholder="제목을 입력하세요"
          type="text"
          onChange={onChangeTitle}
        />
        <DivideLine />
        <p>카테고리</p>
        <DropDown
          value={category}
          onChange={onSelectCategory}
          name="categories"
        >
          <Option value="movie">영화</Option>
          <Option value="musical">뮤지컬</Option>
          <Option value="book">책</Option>
          <Option value="exhibition">전시회</Option>
        </DropDown>
        <Contents
          onChange={onChangeContent}
          name="contents"
          placeholder="내용을 입력하세요"
        />
        <p>썸네일</p>
        <FileInput
          type="file"
          name="thumbnail"
          accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
          onChange={onChangeFile}
        />
        <div>
          <Button onClick={onClickSubmitButton}>여운 남기기</Button>
        </div>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  p {
    margin: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    width: 100vw;
  }

  p {
    margin: 10px;
  }
`;

const HeaderInput = styled.input`
  font-size: 4vw;
  width: 97%;
  margin: 10px;
  padding: 10px;
`;

const FileInput = styled.input`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const Contents = styled.textarea`
  width: 97%;
  font-size: 3vw;
  resize: none;
  border: none;
  height: 500px;
`;

const Button = styled.button`
  border: 1px solid black;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const DivideLine = styled.hr`
  width: 10vw;
  height: 7px;
  border: 1px solid #4a5158;
  background-color: #4a5158;
  text-align: left;
`;

const DropDown = styled.select``;

const Option = styled.option``;

export default UploadForm;
