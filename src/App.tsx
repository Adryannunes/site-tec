// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/inicio";
import { Elenco } from "./components/Elenco";
import { Ribeirao } from "./components/Ribeirao";
import Transparencia from "./pages/Transparencia";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Inicio />
      {/* Conteúdo da página principal */}
      <div className="flex-grow">
        {/* Outros componentes ou conteúdo */}
      </div>
      <Elenco />
      <Ribeirao />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<Transparencia />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
