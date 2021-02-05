import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Category = ({ children, hashtag }) => {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {hashtag ? (
        <Container onClick={onClickHandler} clicked={clicked}>
          #{children}
        </Container>
      ) : (
        <Container onClick={onClickHandler} clicked={clicked}>
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
