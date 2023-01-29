import React, { useEffect } from "react";
import "./components/input";
import Home from "./pages/homepage";
import { Route, Routes, useLocation } from "react-router-dom";
import VotePage from "./pages/vote-page";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<VotePage />} />
    </Routes>
  );
};

export default App;
