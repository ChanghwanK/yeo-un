import React from 'react';
import styles from 'styled-components';

import Header from 'components/header/Header';
import SubHeader from 'components/sub-header/SubHeader';

const MainPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <Container>hh</Container>
    </>
  );
};

const Container = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default MainPage;
