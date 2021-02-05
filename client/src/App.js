import React from 'react';
import styles from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Routes from 'routes/Route';
import { UploadProvider } from 'contexts/UploadContext';

const App = () => {
  return (
    <UploadProvider>
      <AppContainer>
        <GlobalStyle />
        <Routes />
      </AppContainer>
    </UploadProvider>
  );
};

const AppContainer = styles.div`
  diplay: flex;
`;

export default App;
