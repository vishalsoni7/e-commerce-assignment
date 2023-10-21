import { createContext, useEffect, useReducer } from "react";
import { ecReducer, initialState } from "../component/reducer";

// Create a context for managing the application state
export const ECContext = createContext();

// Provider component for managing and providing the application state
export const ECProvider = ({ children }) => {
  const [ecState, ecDispatch] = useReducer(ecReducer, initialState);

  // Use `useEffect` to update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(ecState.cart));
    localStorage.setItem("wishlist", JSON.stringify(ecState.wishlist));
    localStorage.setItem("user", JSON.stringify(ecState.user));
    localStorage.setItem("logged", JSON.stringify(ecState.logged));
  }, [ecState.cart, ecState.wishlist, ecState.user, ecState.logged]);

  // Define the values to be provided to components via the context
  const values = { ecState, ecDispatch };

  // Provide the context and its values to child components
  return <ECContext.Provider value={values}>{children}</ECContext.Provider>;
};
