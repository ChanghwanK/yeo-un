import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Category = ({ children, hashtag, contenxtState, contenxtAction }) => {
  const [clicked, setClicked] = useState(false);

  const onClickCategoryHandler = (e) => {
    if (clicked) {
      contenxtAction.setPreviewCategory(
        contenxtState.previewCategory.filter((i) => i !== e.target.innerHTML),
      );
    } else {
      contenxtAction.setPreviewCategory([
        ...contenxtState.previewCategory,
        e.target.innerHTML,
      ]);
    }
    setClicked(!clicked);
  };

  const onClickHashTagHandler = (e) => {
    if (clicked) {
      contenxtAction.setPreviewHashTag(
        contenxtState.previewHashTag.filter((i) => i !== e.target.innerHTML),
      );
    } else {
      contenxtAction.setPreviewHashTag([
        ...contenxtState.previewHashTag,
        e.target.innerHTML,
      ]);
    }
    setClicked(!clicked);
  };

  return (
    <>
      {hashtag ? (
        <Container onClick={onClickHashTagHandler} clicked={clicked}>
          #{children}
        </Container>
      ) : (
        <Container onClick={onClickCategoryHandler} clicked={clicked}>
          {children}
        </Container>
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-color: #181825;
    color: white;
  }

  ${(props) => {
    if (props.clicked) {
      return css`
        background-color: #181825;
        color: white;
      `;
    }
  }}
`;

export default Category;
