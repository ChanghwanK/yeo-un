import React, { createContext, useState } from 'react';

// Context에서 관리해줄 상태값과 메소드들을 정의합니다.
const CardContext = createContext({
  state: {
    allCard: [],
  },
  actions: {
    setAllCard: () => {},
  },
});

// Provider를 rendering하면서 상태값과 메소드들을 전달합니다.
const CardProvider = ({ children }) => {
  const [allCard, setAllCard] = useState([]);

  const value = {
    state: {
      allCard,
    },
    actions: {
      setAllCard,
    },
  };
  return (
    <CardContext.Provider value={[value.state, value.actions]}>
      {children}
    </CardContext.Provider>
  );
};

const CardConsumer = CardContext.Consumer;
export { CardProvider, CardConsumer };
export default CardContext;
