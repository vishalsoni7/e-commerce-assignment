import { createContext, useEffect, useReducer } from "react";
import { ecReducer, initialState } from "../reducer";

export const ECContext = createContext();

export const ECProvider = ({ children }) => {
  const [ecState, ecDispatch] = useReducer(ecReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(ecState.cart));
    localStorage.setItem("wishlist", JSON.stringify(ecState.wishlist));
    localStorage.setItem("user", JSON.stringify(ecState.user));
    localStorage.setItem("logged", JSON.stringify(ecState.logged));
  }, [ecState.cart, ecState.wishlist, ecState.user, ecState.logged]);

  const values = { ecState, ecDispatch };

  return <ECContext.Provider value={values}>{children}</ECContext.Provider>;
};
