import { useReducer } from "react";
import { authReducer, AthuContext, types } from "../";

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {});

  const onLogin = (name = "") => {
    const action = {
      type: types.login,
      payload: name,
    };

    dispatch(action);
  };
  const onLogout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);
  };
  return (
    <AthuContext.Provider
      value={{ authState, login: onLogin, logout: onLogout }}
    >
      {children}
    </AthuContext.Provider>
  );
};
