import { Route, Routes, Navigate } from "react-router-dom";
import { DCPages, MarvelPage, HeroPage, SearchPage } from "../";
import { Navbar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPages />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
