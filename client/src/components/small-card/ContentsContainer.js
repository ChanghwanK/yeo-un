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
        {created ? <span>{created}</span> : <span>2020/02/06</span>}
        <span>/</span>
        {like ? <span>좋아요 {like}개</span> : <span>좋아요 0개</span>}
        <span>/</span>
        {comment ? <span>댓글 {comment}개</span> : <span>댓글 0개</span>}
      </SmallTextContainer>
      <TitleText>{title}</TitleText>
      <BottomTextContainer>
        {who ? <span>by {who}</span> : <span>by Hyeonsu</span>}
        <BottomCategoryContainer>{category}</BottomCategoryContainer>
      </BottomTextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dcdcdc;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 100%;
  height: 8vw;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 0.5vw;
`;

const SmallTextContainer = styled.div`
  display: flex;
  padding-left: 1vw;

  span {
    font-size: 0.6vw;
    & {
      margin: 2px;
    }
  }
`;

const TitleText = styled.p`
  font-size: 1.4vw;
  font-weight: 550;
  padding-left: 1vw;
`;

const BottomTextContainer = styled.div`
  display: flex;
  padding-left: 1vw;

  span {
    font-size: 0.7vw;
  }
`;

const BottomCategoryContainer = styled.div`
  display: flex;
  padding-left: 1vw;
`;

export default ContentContainer;
