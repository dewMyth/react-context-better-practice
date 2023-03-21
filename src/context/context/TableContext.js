import { createContext, useReducer } from "react";
import TableReducer from "../reducers/TableReducer";

const INITIAL_STATE = {
  user: null,
};

export const TableContext = createContext(INITIAL_STATE);

export const TableContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TableReducer, INITIAL_STATE);
  return (
    <TableContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};
