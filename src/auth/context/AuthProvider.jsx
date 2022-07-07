import { useReducer } from "react";
import { authReducer, AthuContext, types } from "../";
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = "") => {
    const user = { id: "Abc", name };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
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
