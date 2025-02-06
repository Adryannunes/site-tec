import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-6 shadow-lg shadow-green-500/50">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4">
          <img src="/src/images/tec.png" alt="Logo" className="h-12 drop-shadow-lg" />
          <span className="text-xl font-bold text-green-400">Tocantinólis EC</span>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaYoutube />
          </a>
          <a href="#" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-green-400 text-2xl hover:text-white transition duration-300">
            <FaTiktok />
          </a>
          <a href="#" className="text-green-400 text-2xl hover:text-white transition duration-300">
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
