import React from 'react';
import styled from 'styled-components';

const ImageContainer = ({ image }) => {
  return (
    <Container>
      {image ? (
        <img src={image} alt="카드 이미지" />
      ) : (
        <NullImageContainer>썸네일을 넣어주세요.</NullImageContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 450px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NullImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #98999d;
`;

export default ImageContainer;
