import { Route, Routes } from "react-router-dom";
import { HeroesRoutes, LoginPages, PrivateRoute, PrivateLogin } from "../index";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PrivateLogin>
              <LoginPages />
            </PrivateLogin>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
