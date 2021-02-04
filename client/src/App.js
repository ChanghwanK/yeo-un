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
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
