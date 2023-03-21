import { createContext, useReducer } from "react";
import TestReducer from "./TestReducer";

const INITIAL_STATE = {
  user: null,
};

export const TestContext = createContext(INITIAL_STATE);

export const TestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, INITIAL_STATE);

  return (
    <TestContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </TestContext.Provider>
  );
};
