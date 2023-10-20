import { createContext, useReducer } from "react";
import { initialState, ecReducer } from "../component/reducer";

export const ECContext = createContext();

export const ECProvider = ({ children }) => {
  const [ecState, ecDispatch] = useReducer(ecReducer, initialState);
  const values = { ecState, ecDispatch };

  return (
    <>
      <ECContext.Provider value={values}> {children} </ECContext.Provider>
    </>
  );
};
