import { Route, Routes } from "react-router-dom";
import { HeroesRoutes, LoginPages, PrivateRoute } from "../index";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages />} />
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
