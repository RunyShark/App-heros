import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AthuContext } from "../";
export const LoginPages = () => {
  const { login } = useContext(AthuContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Dario M");
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
