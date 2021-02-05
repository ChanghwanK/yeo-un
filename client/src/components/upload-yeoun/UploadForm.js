import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import UploadContext from 'contexts/UploadContext';
import CategoryContainer from 'components/upload-yeoun/CategoryContainer';

const UploadForm = (props) => {
  const [file, setFile] = useState('');
  const [fileURL, setFileURL] = useState('');
  const [state, actions] = useContext(UploadContext);

  const onChangeContent = (e) => {
    actions.setPreviewContent(e.target.value);
  };

  const onChangeTitle = (e) => {
    actions.setPreviewTitle(e.target.value);
  };

  const onClickCancelButton = (e) => {
    props.history.push('/');
  };

  const onClickSubmitButton = (e) => {
    e.preventDefault();
    const title = document.getElementsByName('title')[0].value.trim();
    const contents = document.getElementsByName('contents')[0].value.trim();

    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('author', 'hyeonsu');
    // formData.append('content', contents);
    // formData.append('likeCount', 0);
    // formData.append('viewCount', 0);
    // formData.append('category', nowCategory);
    // formData.append('thumbnail', fileURL);

    const data = {
      title: title,
      author: 'hyeonsu',
      content: contents,
      categoryId: Number(state.categoryNumber),
      memberId: 1,
      thumbnail: fileURL,
    };

    const headers = {
      'Content-Type': `application/json`,
      'Access-Control-Allow-Origin': '*',
    };

    console.log(data);

    axios({
      method: 'POST',
      url: `/api/posts`,
      data: data,
      headers: headers,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <CategoryContainer contextState={state} contextAction={actions} />
        <Contents
          onChange={onChangeContent}
          name="contents"
          placeholder="내용을 입력하세요"
        />
        <FileInputContainer>
          <FileButton for="file">썸네일 올리기</FileButton>
          <FileInput
            type="file"
            id="file"
            accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
            onChange={onChangeFile}
          />
          <FileText value={file} placeholder="파일을 올려주세요" />
        </FileInputContainer>
        <ButtonContainer>
          <CancelButton onClick={onClickCancelButton}>돌아가기</CancelButton>
          <UploadButton onClick={onClickSubmitButton}>여운 남기기</UploadButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  align-items: center;
  justify-content: stretch;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  p {
    margin: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HeaderInput = styled.input`
  font-size: 4vw;
  width: 97%;
  margin: 10px;
  padding: 10px;
`;

const Contents = styled.textarea`
  width: 97%;
  font-size: 1.5vw;
  resize: none;
  border: none;
  height: 500px;
  background-color: #e6e6e6;
  margin-top: 30px;
  &: focus {
    background-color: white;
  }
`;

const ButtonContainer = styled.div`
  margin: 50px;
`;

const UploadButton = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  width: 10vw;
  height: 2vw;
  min-width: 150px;
  min-height: 25px;
  text-align: center;
  border-radius: 7px;
  font-size: 1.5vw;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    opacity: 0.5;
  }

  background-color: #2c353e;
  color: white;
`;

const CancelButton = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  width: 10vw;
  height: 2vw;
  min-width: 150px;
  min-height: 25px;
  text-align: center;
  border-radius: 7px;
  font-size: 1.5vw;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-color: #a9a9a9;
  }
  background-color: #c9c9c9;
`;

const DivideLine = styled.hr`
  width: 10vw;
  height: 7px;
  border: 1px solid #4a5158;
  background-color: #4a5158;
  text-align: left;
`;

const FileInputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FileInput = styled.input`
  display: none;
`;

const FileText = styled.input`
  text-align: center;
  border-radius: 4px;
`;

const FileButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  width: 10vw;
  height: 2vw;
  min-width: 150px;
  min-height: 25px;
  border-radius: 7px;
  font-size: 1.3vw;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    opacity: 0.5;
  }

  background-color: #2c353e;
  color: white;
`;

export default withRouter(UploadForm);
