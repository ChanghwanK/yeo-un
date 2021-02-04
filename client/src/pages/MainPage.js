import React from 'react';
import styles from 'styled-components';

import Header from 'components/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <p>여운 - Yeo Un</p>
      </Container>
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
