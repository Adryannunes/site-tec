import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Patrocinadores } from "./components/Patrocinadores";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Patrocinadores />
      {/* Conteúdo da página */}
      <div className="flex-grow">
        {/* Aqui vai o conteúdo principal */}
      </div>

      <Footer />
    </div>
  );
};

export default App;
