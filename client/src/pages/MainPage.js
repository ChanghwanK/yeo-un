import React from 'react';
import styles from 'styled-components';

import Header from 'components/header/Header';
import SubHeader from 'components/sub-header/SubHeader';
import ContentsContainer from 'components/main-contents/ContentsContainer';

const MainPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Container>
        <ContentsContainer />
      </Container>
    </>
  );
};

const Container = styles.div`
  display: flex;
  justify-content: center;
`;

export default MainPage;
