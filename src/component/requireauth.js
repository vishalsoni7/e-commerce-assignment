import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ECContext } from "../context/ECContext";

export const RequireAuth = ({ children }) => {
  const {
    ecState: { logged },
  } = useContext(ECContext);

  return <> {logged ? children : <Navigate to="/login" />} </>;
};
