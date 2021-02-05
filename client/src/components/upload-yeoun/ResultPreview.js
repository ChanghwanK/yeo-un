import React, { useContext } from 'react';
import styled from 'styled-components';
import UploadContext from 'contexts/UploadContext';

const ResultPreview = () => {
  const [state, actions] = useContext(UploadContext);

  return (
    <Container>
      <div>
        <p>{state.previewCategory}</p>
        <p>{state.previewTitle}</p>
        <p>{state.previewContent}</p>
        <img src={state.previewThumbnail} alt="미리보기" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background-color: #f7f7f7;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

export default ResultPreview;
