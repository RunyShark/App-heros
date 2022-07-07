import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AthuContext } from "../index";

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AthuContext);
  const { logged } = authState;
  console.log(`hola`, logged);

  return logged ? children : <Navigate to="/login" />;
};
