import React from 'react';
import styled from 'styled-components';
import temp from 'images/temp.png';

import PostCategory from 'components/posts-page/PostCategory';

const PostDetailPage = ({ match }) => {
  const postId = match.params.number;

  return (
    <Container>
      <SubHeaderText>2020.02.05 / 좋아요 312개 / 댓글 19개</SubHeaderText>

      <HeaderText>힐링되는 전시회, 유담 : 간직해 온 마음들</HeaderText>

      <TagContainer>
        <p>by hyeonsu</p>
        <PostCategory click={true} hashtag={false}>
          전시회
        </PostCategory>
        <PostCategory click={false} hashtag={true}>
          조용한
        </PostCategory>
        <PostCategory click={false} hashtag={true}>
          편안함
        </PostCategory>
      </TagContainer>

      <Image src={temp} alt="image" />

      <Content>
        유담 작가는 디지털 드로잉으로 풍경화를 그리는 국내 일러스트 작가로
        작가가 느낀 감정이나느껴보고 싶은 감정들을 작품에 담아냅니다. 그녀는
        실제 본인의 기억과 시선들을 바탕으로 작품을 구상하고 당시 감정과
        분위기를 입혀 서정적인 작품을 완성시킵니다. 평소에 전시회를 다니는 것을
        좋아하는데 코로나로 인해 오프라인 전시를 가지 못해서 아쉬운 마음이
        컸는데 이렇게 나마 가까운 곳에서 뜻깊은 전시를 보게 되어 매우
        좋았습니다.
      </Content>

      <CommentForm>
        <CommentInput type="text" />
        <CommentButton>등록하기</CommentButton>
      </CommentForm>

      <CommentsContainer>
        <Comment>현수 : 좋아요</Comment>
        <Comment>현수 : 너무 좋아요</Comment>
      </CommentsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SubHeaderText = styled.p``;

const HeaderText = styled.p``;

const TagContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img``;

const Content = styled.div``;

const CommentForm = styled.form`
  display: flex;
`;

const CommentInput = styled.input`
  border: 1px solid black;
`;

const CommentButton = styled.button``;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  display: flex;
`;

export default PostDetailPage;
