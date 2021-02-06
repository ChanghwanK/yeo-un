import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import MainCard from 'components/small-card/MainCard';
// import CardContainer from 'components/main-contents/CardContainer';
import CardContext from 'contexts/CardContext';

import post1 from 'images/01.png';
import post2 from 'images/02.png';
import post3 from 'images/03.png';
import post4 from 'images/04.png';
import post5 from 'images/05.png';
import post6 from 'images/06.png';
import post7 from 'images/07.png';
import post8 from 'images/08.png';
import post9 from 'images/09.png';
import post10 from 'images/10.png';
import post11 from 'images/11.png';
import post12 from 'images/12.png';
import post13 from 'images/13.png';
import post14 from 'images/14.png';
import post15 from 'images/15.png';
import post16 from 'images/16.png';

// title={props.title}
// content={props.content}
// category={props.category}
// hashtag={props.hashtag}

const popular = [
  {
    title: '오리지널 프린트 ',
    image: post1,
    postNumber: 1,
    category: '문학',
    hashtag: ['힐링', '감성적인'],
  },
  {
    title: '파피에 콜레',
    image: post2,
    postNumber: 2,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: ' 애드가 알란 포우',
    image: post3,
    postNumber: 3,
    category: '운동',
    hashtag: ['감성적인', '화려한', '밝은'],
  },
  {
    title: '추상적인, 비구상적인',
    image: post4,
    postNumber: 4,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const top4 = [
  {
    title: '초기 그리스도교',
    image: post5,
    postNumber: 5,
    category: '문학',
    hashtag: ['힐링', '감성적인', '기분좋은'],
  },
  {
    title: '외광파',
    image: post6,
    postNumber: 6,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '오르피즘',
    image: post7,
    postNumber: 7,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '포토리얼리즘',
    image: post8,
    postNumber: 8,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const last = [
  {
    title: '회화적 추상 이후의',
    image: post9,
    postNumber: 9,
    category: '문학',
    hashtag: ['힐링', '감성적인'],
  },
  {
    title: '라파엘 이전의',
    image: post10,
    postNumber: 10,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '원초주의',
    image: post11,
    postNumber: 11,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '돋보이게 그리기',
    image: post12,
    postNumber: 12,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const recommend = [
  {
    title: '조화, 안정감',
    image: post13,
    postNumber: 13,
    category: '문학',
    hashtag: ['힐링', '감성적인'],
  },
  {
    title: ' 스푸마토',
    image: post14,
    postNumber: 14,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '색채의 조화',
    image: post15,
    postNumber: 15,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
  {
    title: '생테티슴',
    image: post16,
    postNumber: 16,
    category: '문학',
    hashtag: ['감성적인', '화려한', '조용한'],
  },
];

const ContentsContainer = () => {
  const [state, actions] = useContext(CardContext);

  useEffect(() => {
    actions.setPopularCard(popular);
    actions.setTop4Card(top4);
    actions.setLastCard(last);
    actions.setRecommendCard(recommend);
  }, []);

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
