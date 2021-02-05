import React, { createContext, useState } from 'react';

// Context에서 관리해줄 상태값과 메소드들을 정의합니다.
const UploadContext = createContext({
  state: {
    previewTitle: '',
    previewCategory: [],
    previewHashTag: [],
    previewContent: '',
    previewThumbnail: '',
  },
  actions: {
    setPreviewTitle: () => {},
    setPreviewCategory: () => {},
    setPreviewHashTag: () => {},
    setPreviewThumbnail: () => {},
    setPreviewContent: () => {},
  },
});

// Provider를 rendering하면서 상태값과 메소드들을 전달합니다.
const UploadProvider = ({ children }) => {
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewCategory, setPreviewCategory] = useState('');
  const [previewHashTag, setPreviewHashTag] = useState('');
  const [previewThumbnail, setPreviewThumbnail] = useState('');
  const [previewContent, setPreviewContent] = useState('');

  const value = {
    state: {
      previewTitle,
      previewCategory,
      previewHashTag,
      previewThumbnail,
      previewContent,
    },
    actions: {
      setPreviewTitle,
      setPreviewCategory,
      setPreviewHashTag,
      setPreviewThumbnail,
      setPreviewContent,
    },
  };
  return (
    <UploadContext.Provider value={[value.state, value.actions]}>
      {children}
    </UploadContext.Provider>
  );
};

const UploadConsumer = UploadContext.Consumer;
export { UploadProvider, UploadConsumer };
export default UploadContext;
