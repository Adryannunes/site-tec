import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import logoTec from "../images/tec.png"; 

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-6 shadow-lg shadow-green-500/50">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4">
          <img src={logoTec} alt="Logo" className="h-12 drop-shadow-lg" />
          <span className="text-xl font-bold text-green-400">Tocantinópolis EC</span>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-6 mb-4">
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@TECTVtocantinopolisec" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaYoutube />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tocantinopolis.ec/" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaInstagram />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@tocantinopolis_ec" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaTiktok />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/p/Tocantin%C3%B3polis-Esporte-Clube-100066846137478/?_rdr" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaFacebook />
          </a>
        </div>

        {/* Barra inferior */}
        <div className="w-full border-t border-green-400 text-center py-2 text-sm text-gray-400">
          © {new Date().getFullYear()} | Desenvolvido por 
          <span className="text-green-400 font-bold"> Adryan.Dev</span>
        </div>

      </div>
    </footer>
  );
};
