import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: {
    width: '1.8vw',
    height: '1.8vw',
    '&': {
      margin: '0 0.1vw',
    },
  },
  icon: {
    width: '1.3vw',
    height: '1.3vw',
  },
});

const ContentContainer = ({
  title,
  content,
  category,
  like,
  created,
  comment,
  who,
  hashtag,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <IconContainer>
        <Avatar className={classes.avatar}>
          <FavoriteBorderIcon className={classes.icon} />
        </Avatar>
        <Avatar className={classes.avatar}>
          <ShareIcon className={classes.icon} />
        </Avatar>
      </IconContainer>
      <SmallTextContainer>
        {created ? <span>{created}</span> : <span>2020.02.06</span>}
        <span>/</span>
        {like ? <span>좋아요 {like}개</span> : <span>좋아요 0개</span>}
        <span>/</span>
        {comment ? <span>댓글 {comment}개</span> : <span>댓글 0개</span>}
      </SmallTextContainer>
      {title ? (
        <TitleText>{title}</TitleText>
      ) : (
        <TitleText>제목을 입력하세요</TitleText>
      )}
      <BottomTextContainer>
        {who ? <span>by {who}</span> : <span>by Hyeonsu</span>}
        <BottomCategoryContainer>{category}</BottomCategoryContainer>
        <BottomCategoryContainer>
          {hashtag
            ? hashtag.map((i) => {
                return <div key={i}>{i}</div>;
              })
            : ''}
        </BottomCategoryContainer>
      </BottomTextContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
`;

const SmallTextContainer = styled.div`
  display: flex;

  span {
    font-size: 0.8vw;
    & {
      margin: 2px;
    }
  }
`;

const TitleText = styled.p`
  font-size: 1.4vw;
  font-weight: 550;
`;

const BottomTextContainer = styled.div`
  display: flex;

  span {
    font-size: 0.7vw;
  }
`;

const BottomCategoryContainer = styled.div`
  display: flex;
`;

export default ContentContainer;
