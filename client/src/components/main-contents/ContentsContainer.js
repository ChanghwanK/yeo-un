import React from 'react';
import styled from 'styled-components';

import MainCard from 'components/small-card/MainCard';
// import CardContainer from 'components/main-contents/CardContainer';

import post1 from 'images/게시글1.jpg';
import post2 from 'images/게시글2.jpg';
import post3 from 'images/게시글3.jpg';
import post4 from 'images/게시글4.jpg';
import post5 from 'images/게시글5.jpg';
import post6 from 'images/게시글6.jpg';
import post7 from 'images/게시글7.jpg';
import post8 from 'images/게시글8.jpg';
import post9 from 'images/게시글9.jpg';
import post10 from 'images/게시글10.jpg';
import post11 from 'images/게시글11.jpg';
import post12 from 'images/게시글12.jpg';
import post13 from 'images/게시글13.jpg';
import post14 from 'images/게시글14.jpg';
import post15 from 'images/게시글15.jpg';
import post16 from 'images/게시글16.jpg';

// title={props.title}
// content={props.content}
// category={props.category}
// hashtag={props.hashtag}

const popular = [
  {
    title: '한적한 카페.. 그리고 커피 한 잔',
    image: post1,
    postNumber: 1,
    category: '문학',
    hashtag: ['힐링', '감성적인'],
  },
  {
    title: '햇빛이 따스한 어느 날 오후',
    image: post2,
    postNumber: 2,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '아침 해를 바라보며',
    image: post3,
    postNumber: 3,
    category: '운동',
    hashtag: ['감성적인', '화려한', '밝은'],
  },
  {
    title: '책 읽기 좋은 카페',
    image: post4,
    postNumber: 4,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const top4 = [
  {
    title: '양말들',
    image: post5,
    postNumber: 5,
    category: '문학',
    hashtag: ['힐링', '감성적인', '기분좋은'],
  },
  {
    title: '매직타임',
    image: post6,
    postNumber: 6,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '달무리',
    image: post7,
    postNumber: 7,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '카페',
    image: post8,
    postNumber: 8,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const last = [
  {
    title: '영천 버드나무 숲',
    image: post9,
    postNumber: 9,
    category: '문학',
    hashtag: ['힐링', '감성적인'],
  },
  {
    title: '대구 이월드',
    image: post10,
    postNumber: 10,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '햇빛이 따스한 어느 날 오후',
    image: post11,
    postNumber: 11,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '햇빛이 따스한 어느 날 오후',
    image: post12,
    postNumber: 12,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const recommend = [
  {
    title: '한적한 카페.. 그리고 커피 한 잔',
    image: post13,
    postNumber: 13,
    category: '문학',
    hashtag: ['힐링', '감성적인'],
  },
  {
    title: '햇빛이 따스한 어느 날 오후',
    image: post14,
    postNumber: 14,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '햇빛이 따스한 어느 날 오후',
    image: post15,
    postNumber: 15,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '햇빛이 따스한 어느 날 오후',
    image: post16,
    postNumber: 16,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const ContentsContainer = () => {
  return (
    <Container>
      <TitleText>인기 게시물</TitleText>
      <FourCardContainer>
        {popular.map((i) => {
          return (
            <MainCard
              key={i.postNumber}
              title={i.title}
              image={i.image}
              number={i.postNumber}
              category={i.category}
              hashtag={i.hashtag}
            />
          );
        })}
      </FourCardContainer>
      <TitleText>지금 뜨는 게시물 TOP 4</TitleText>
      <FourCardContainer>
        {top4.map((i) => {
          return (
            <MainCard
              key={i.postNumber}
              title={i.title}
              image={i.image}
              number={i.postNumber}
              category={i.category}
              hashtag={i.hashtag}
            />
          );
        })}
      </FourCardContainer>
      <TitleText>최근 게시물</TitleText>
      <FourCardContainer>
        {last.map((i) => {
          return (
            <MainCard
              key={i.postNumber}
              title={i.title}
              image={i.image}
              number={i.postNumber}
              category={i.category}
              hashtag={i.hashtag}
            />
          );
        })}
      </FourCardContainer>
      <TitleText>장르별 추천 게시물</TitleText>
      <FourCardContainer>
        {recommend.map((i) => {
          return (
            <MainCard
              key={i.postNumber}
              title={i.title}
              image={i.image}
              number={i.postNumber}
              category={i.category}
              hashtag={i.hashtag}
            />
          );
        })}
      </FourCardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 50px;
`;

const FourCardContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 50px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const TitleText = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-top: 50px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

export default ContentsContainer;
