import React, { useEffect, useContext } from 'react';
import styles from 'styled-components';
// import axios from 'axios';

import Header from 'components/header/Header';
import SubHeader from 'components/sub-header/SubHeader';
import ContentsContainer from 'components/main-contents/ContentsContainer';
import Footer from 'components/main-footer/Footer';
import CardContext from 'contexts/CardContext';

const MainPage = () => {
  const [state, actions] = useContext(CardContext);

  // useEffect(async () => {
  //   await axios.get('/api/posts').then((res) => {
  //     actions.setAllCard(res.data);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <SubHeader />
      <Container>
        <ContentsContainer />
        <Footer />
      </Container>
    </>
  );
};

const Container = styles.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
