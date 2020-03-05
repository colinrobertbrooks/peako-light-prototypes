import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import IndexPage from "./pages/Index";
import RelaysPage from "./pages/Relays";
import TriacsPage from "./pages/Triacs";
import NotFoundPage from "./pages/NotFound";

const App = () => (
  <>
    <Navbar />
    <main className="container text-center">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="relays" element={<RelaysPage />} />
        <Route path="triacs" element={<TriacsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </>
);

export default App;
