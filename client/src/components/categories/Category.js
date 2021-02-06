import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Category = ({ children, hashtag, contextState, contextAction, idx }) => {
  const [clicked, setClicked] = useState(false);

  const onClickCategoryHandler = (e) => {
    if (
      clicked &&
      contextState.previewCategory !== '' &&
      contextState.categoryNumber !== 0
    ) {
      contextAction.setPreviewCategory('');
      contextAction.setCategoryNumber(0);
    } else {
      contextAction.setPreviewCategory(e.target.innerHTML);
      contextAction.setCategoryNumber(e.target.id);
    }
    setClicked(!clicked);
  };

  const onClickHashTagHandler = (e) => {
    if (clicked) {
      contextAction.setPreviewHashTag(
        contextState.previewHashTag.filter((i) => i !== e.target.innerHTML),
      );
    } else {
      contextAction.setPreviewHashTag([
        ...contextState.previewHashTag,
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
        <Container
          id={idx}
          onClick={onClickCategoryHandler}
          nowCategory={contextState.previewCategory}
          child={children}
          clicked={clicked}
        >
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
    if (props.clicked && props.child === props.nowCategory) {
      return css`
        background-color: #181825;
        color: white;
      `;
    }
  }}
`;

export default Category;
