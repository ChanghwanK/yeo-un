import React from 'react';
import styled, { css } from 'styled-components';

const PostCategory = ({ hashtag, children, click }) => {
  return (
    <>
      {hashtag ? (
        <Container click={click}>#{children}</Container>
      ) : (
        <Container click={click}>{children}</Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #f7f8f9;
  border-radius: 30px;
  width: 80%;
  height: 50px;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.click) {
      return css`
        background-color: #181825;
        color: white;
      `;
    }
  }}
`;

export default PostCategory;
