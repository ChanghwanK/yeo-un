import React from 'react';
import styled from 'styled-components';

const SearchBox = ({ isBoxOpened }) => {
  return <Container open={isBoxOpened}>hi</Container>;
};

const Container = styled.div`
  position: absolute;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  height: ${(props) => (props.open ? '240px' : '0px')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  border: ${(props) => (props.open ? '1px solid #75d5d5' : '0px solid white')};
  width: 30vw;
  top: 53px;
  background-color: white;
  padding: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.13);
  transition: all 0.55s cubic-bezier(0, 0.7, 0.53, 1.01);
`;

export default SearchBox;
