import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AccountantsPage from "./pages/accountants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ksiegowi" element={<AccountantsPage />} />
    </Routes>
  );
}

export default App;
