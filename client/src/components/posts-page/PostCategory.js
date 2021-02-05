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
  height: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0px 10px 0px 0px;

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
