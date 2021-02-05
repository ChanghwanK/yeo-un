import React from 'react';
import styled from 'styled-components';

import Card from 'components/main-contents/Card';
// import CardContainer from 'components/main-contents/CardContainer';

const ContentsContainer = () => {
  return (
    <Container>
      <TitleText>인기 게시물</TitleText>
      <FourCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </FourCardContainer>
      <TitleText>지금 뜨는 게시물 TOP 4</TitleText>
      <FourCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </FourCardContainer>
      <TitleText>최근 게시물</TitleText>
      <FourCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </FourCardContainer>
      <TitleText>장르별 추천 게시물</TitleText>
      <FourCardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </FourCardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const FourCardContainer = styled.div`
  display: flex;
`;

const TitleText = styled.h1`
  font-size: 20px;
  padding: 10px;
`;

export default ContentsContainer;
