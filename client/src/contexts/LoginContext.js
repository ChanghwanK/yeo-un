import React, { createContext, useState } from 'react';

// Context에서 관리해줄 상태값과 메소드들을 정의합니다.
const LoginContext = createContext({
  state: {
    logined: false,
  },
  actions: {
    setLogined: () => {},
  },
});

// Provider를 rendering하면서 상태값과 메소드들을 전달합니다.
const LoginProvider = ({ children }) => {
  const [logined, setLogined] = useState(false);

  const value = {
    state: {
      logined,
    },
    actions: {
      setLogined,
    },
  };
  return (
    <LoginContext.Provider value={[value.state, value.actions]}>
      {children}
    </LoginContext.Provider>
  );
};

const LoginConsumer = LoginContext.Consumer;
export { LoginProvider, LoginConsumer };
export default LoginContext;
