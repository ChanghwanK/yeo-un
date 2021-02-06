import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Logo from 'components/Logo';
import UploadForm from 'components/upload-yeoun/UploadForm';
import ResultPreview from 'components/upload-yeoun/ResultPreview';

const UploadYeoUnPage = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  return (
    <Container>
      {/* <Logo /> */}
      <UploadForm />
      {isPc ? <ResultPreview /> : ''}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default UploadYeoUnPage;
