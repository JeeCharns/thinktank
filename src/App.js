import React from "react";
import "./App.css";
import "./components/input";
import { Home } from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import { OtherPage } from "./pages/other-page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="very-secret-route" element={<OtherPage />} />
    </Routes>
  );
}






  