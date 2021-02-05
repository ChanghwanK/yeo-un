import React from 'react';
import styled from 'styled-components';
import Category from 'components/categories/Category';

const categoryContent = [
  '전시회',
  '공연',
  '영화',
  '음악',
  '연극',
  '사진',
  '독서',
  '운동',
  '댄스',
  '미술',
];

const hashtagContent = [
  '힐링',
  '아름다운',
  '감동적인',
  '조용한',
  '귀여운',
  '감성적인',
  '신나는',
  '슬픈',
  '지루한',
  '복잡한',
  '그리운',
  '설레는',
  '스릴러',
  '로맨스',
  '편안한',
  '열정적인',
  '뿌듯한',
  '화나는',
  '깔끔한',
  '취향저격',
];

const CategoryContainer = ({ contextState, contextAction }) => {
  return (
    <Container>
      <HeaderText>카테고리</HeaderText>
      <Categories>
        {categoryContent.map((i, idx) => {
          return (
            <Category
              contextState={contextState}
              contextAction={contextAction}
              hashtag={false}
              key={i}
              idx={idx}
            >
              {i}
            </Category>
          );
        })}
      </Categories>
      <HeaderText>해시태크</HeaderText>
      <Hashtags>
        {hashtagContent.map((i) => {
          return (
            <Category
              contextState={contextState}
              contextAction={contextAction}
              hashtag={true}
              key={i}
            >
              {i}
            </Category>
          );
        })}
      </Hashtags>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderText = styled.p`
  font-size: 2vw;
  text-align: left;
`;

const Categories = styled.div`
  display: grid;
  justify-items: center;
  font-size: 13px;

  grid-template-columns: repeat(auto-fill, minmax(10%, auto));
  row-gap: 10px;
`;

const Hashtags = styled.div`
  display: grid;
  justify-items: center;
  font-size: 13px;
  grid-template-columns: repeat(auto-fill, minmax(15%, auto));
  row-gap: 10px;
`;

export default CategoryContainer;
