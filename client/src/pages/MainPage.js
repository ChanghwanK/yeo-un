import React from 'react';
import styles from 'styled-components';

import Header from 'components/header/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <p>
          <strong>여운 - Yeo Un</strong>
        </p>
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
