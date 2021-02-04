import React from 'react';
import styles from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Routes from 'routes/Route';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Routes />
    </AppContainer>
  );
};

const AppContainer = styles.div`
  diplay: flex;
  overflow-x: hidden;
`;

export default App;
