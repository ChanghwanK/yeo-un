import React from 'react';
import styles from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Routes from 'routes/Route';
import { UploadProvider } from 'contexts/UploadContext';
import { CardProvider } from 'contexts/CardContext';

const App = () => {
  return (
    <UploadProvider>
      <CardProvider>
        <AppContainer>
          <GlobalStyle />
          <Routes />
        </AppContainer>
      </CardProvider>
    </UploadProvider>
  );
};

const AppContainer = styles.div`
  diplay: flex;
`;

export default App;
