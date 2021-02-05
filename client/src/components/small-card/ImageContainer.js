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
  width: 100%;
  height: 15vw;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    object-fit: cover;
  }
`;

const NullImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #98999d;
`;

export default ImageContainer;
