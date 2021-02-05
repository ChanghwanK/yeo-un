import React from 'react';
import styled from 'styled-components';

import ImageContainer from 'components/small-card/ImageContainer';
import ContentContainer from 'components/small-card/ContentsContainer';

const Card = ({ title, content, category, image, hashtag }) => {
  return (
    <Container>
      <ImageContainer image={image} />
      <ContentContainer
        title={title}
        content={content}
        category={category}
        hashtag={hashtag}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.13);
  align-items: center;
  width: 22vw;
  height: 23vw;
  margin: 10px;
`;

export default Card;
