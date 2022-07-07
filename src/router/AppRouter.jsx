import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPages } from "../auth";
import { DCPages, MarvelPage } from "../heros";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPages />} />
        <Route path="login" element={<LoginPages />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
