import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Index from "./pages/Index";
import Relays from "./pages/Relays";
import Triacs from "./pages/Triacs";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <Navbar />
    <main className="container text-center">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="relays" element={<Relays />} />
        <Route path="triacs" element={<Triacs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>
);

export default App;
