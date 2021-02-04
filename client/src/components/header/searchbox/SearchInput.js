import React, { useState } from 'react';
import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

import SearchBox from 'components/header/searchbox/SearchBox';

const SearchInput = () => {
  const [inputText, setInputText] = useState('');
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onFocusInput = () => {
    setIsBoxOpened(true);
  };

  const onBlurInput = () => {
    setIsBoxOpened(false);
  };

  return (
    <Container>
      <Input
        placeholder="여운을 검색해보세요!"
        onBlur={onBlurInput}
        onFocus={onFocusInput}
        onChange={onChangeInput}
        value={inputText}
        type="text"
      />
      <SearchIcon fontSize="large" />
      <SearchBox isBoxOpened={isBoxOpened} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  width: 30vw;
  height: 40px;
  background-color: #fbfbf8;
  padding-left: 10px;
  margin-right: 5px;
  border: 1px solid white;
  transition: all 0.25s ease-in;
  &:hover {
    border: 1px solid #75d5d5;
  }
  &:focus {
    border: 1px solid #75d5d5;
    background-color: white;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export default SearchInput;
