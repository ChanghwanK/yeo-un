import React from 'react';
import styled from 'styled-components';
import temp from 'images/temp.png';
import temp1 from 'images/temp1.png';

import PostCategory from 'components/posts-page/PostCategory';

const PostDetailPage = ({ match }) => {
  const postId = match.params.number;

  return (
    <Container>
      <Border>
        <SubHeaderText>2020.02.05 / 좋아요 312개 / 댓글 3개</SubHeaderText>
        <HeaderText>힐링되는 전시회, 유담 : 간직해 온 마음들</HeaderText>

        <TagContainer>
          <p>By.ABC&nbsp;</p>
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
        <Post>
          <Image src={temp} alt="image" />
          <Image src={temp1} alt="image" />

          <Content>
            <br />
            유담 작가는 디지털 드로잉으로 풍경화를 그리는 국내 일러스트 작가로
            <br />
            작가가 느낀 감정이나느껴보고 싶은 감정들을 작품에 담아냅니다.
            <br />
            <br />
            그녀는 실제 본인의 기억과 시선들을 바탕으로 작품을 구상하고 당시
            감정과 분위기를 입혀 서정적인 작품을 완성시킵니다.
            <br />
            <br />
            평소에 전시회를 다니는 것을 좋아하는데 코로나로 인해 오프라인 전시를
            가지 못해서 아쉬운 마음이 컸는데 이렇게 나마 가까운 곳에서 뜻깊은
            전시를 보게 되어 매우 좋았습니다.
            <br />
            <br />
            <br />
          </Content>
        </Post>
        <CommentForm>
          <CommentInput type="text" />
          <CommentButton>등록하기</CommentButton>
        </CommentForm>

        <CommentsContainer>
          <Comment>현수 : 좋아요</Comment>
          <Comment>현수 : 너무 좋아요</Comment>
          <Comment>유성 : 예뻐요♡</Comment>
        </CommentsContainer>
      </Border>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Border = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
  border-radius: 10px;
  margin: 30px 400px;
  padding: 20px;
`;

const Text = styled.p``;

const SubHeaderText = styled.p`
  margin: 20px 0px 0px 0px;
  font-size: 14px;
`;

const HeaderText = styled.p`
  font-size: 20px;
  align-items: left;
  font-weight: bold;
  margin: 0px 0px 10px 0px;
`;

const TagContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 70%;
  margin: 15px;
`;

const Content = styled.div`
  font-size: 12px;
`;

const CommentForm = styled.form`
  display: flex;
`;

const CommentInput = styled.input`
  display: flex;
  border: 1px solid black;
  border-radius: 5px 0px 0px 5px;
  background-color: white;
  height: 40px;
  flex: 1 2;
`;

const CommentButton = styled.button`
  border: 1px solid black;
  border-radius: 0px 5px 5px 0px;
  background-color: #37373d;
  padding: 0px 50px 0px 50px;
  color: white;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Comment = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px 10px 0px 10px;
  height: 30px;
  border-radius: 5px;
`;

export default PostDetailPage;
