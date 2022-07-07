import { useReducer } from "react";
import { authReducer, AthuContext } from "../";

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {});
  return <AthuContext.Provider value={{}}>{children}</AthuContext.Provider>;
};
