import React from 'react';
import styled from 'styled-components';

import MainCard from 'components/small-card/MainCard';
// import CardContainer from 'components/main-contents/CardContainer';

const ContentsContainer = () => {
  return (
    <Container>
      <TitleText>인기 게시물</TitleText>
      <FourCardContainer>
        <MainCard number={1} />
        <MainCard number={2} />
        <MainCard number={3} />
        <MainCard number={4} />
      </FourCardContainer>
      <TitleText>지금 뜨는 게시물 TOP 4</TitleText>
      <FourCardContainer>
        <MainCard number={5} />
        <MainCard number={6} />
        <MainCard number={7} />
        <MainCard number={8} />
      </FourCardContainer>
      <TitleText>최근 게시물</TitleText>
      <FourCardContainer>
        <MainCard number={9} />
        <MainCard number={10} />
        <MainCard number={11} />
        <MainCard number={12} />
      </FourCardContainer>
      <TitleText>장르별 추천 게시물</TitleText>
      <FourCardContainer>
        <MainCard number={13} />
        <MainCard number={14} />
        <MainCard number={15} />
        <MainCard number={16} />
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
