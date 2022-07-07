import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AthuContext } from "../index";

export const PrivateLogin = ({ children }) => {
  const { authState } = useContext(AthuContext);
  const { logged } = authState;

  return !logged ? children : <Navigate to="/" />;
};
