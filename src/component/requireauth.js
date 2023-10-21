import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ECContext } from "../context/ECContext";

// Component to require authentication before rendering children
export const RequireAuth = ({ children }) => {
  const {
    ecState: { logged },
  } = useContext(ECContext);

  return <> {logged ? children : <Navigate to="/login" />} </>;
};
