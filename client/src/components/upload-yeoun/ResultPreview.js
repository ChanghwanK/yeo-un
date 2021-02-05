import React, { useContext } from 'react';
import styled from 'styled-components';
import UploadContext from 'contexts/UploadContext';
import PreviewCard from 'components/small-card/PreviewCard';

const ResultPreview = () => {
  const [state, actions] = useContext(UploadContext);

  return (
    <Container>
      <PreviewCard
        title={state.previewTitle}
        category={state.previewCategory}
        hashtag={state.previewHashTag}
        content={state.previewContent}
        image={state.previewThumbnail}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vw;
  background-color: #f7f7f7;
`;

export default ResultPreview;
