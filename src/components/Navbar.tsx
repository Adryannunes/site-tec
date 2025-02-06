import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa"; // Ícone do Google

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-black to-gray-900 text-white p-4 flex justify-between items-center shadow-lg shadow-green-500/50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/src/images/tec.png" alt="Logo" className="h-12 drop-shadow-lg" />
        <span className="text-xl font-bold text-green-400">Tocantinópolis EC</span>
      </div>

      {/* Links centrais */}
      <div className="space-x-10 text-xl font-medium">
        <a href="#" className="hover:text-green-400 transition duration-300">Elenco</a>
        <a href="#" className="hover:text-green-400 transition duration-300">Sócio Torcedor</a>
        <a href="#" className="hover:text-green-400 transition duration-300">Jogos</a>
        <a href="#" className="hover:text-green-400 transition duration-300">Notícias</a>
      </div>

      {/* Login */}
      <div className="relative">
        <button 
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 shadow-md shadow-green-400/50"
          onClick={() => setOpen(!open)}
        >
          Login
        </button>

        {/* Popover de Login */}
        {open && (
          <div 
            className="absolute right-0 mt-2 w-72 bg-gray-900 text-white p-4 rounded-lg shadow-lg shadow-green-500/50 border border-green-400"
            tabIndex={0} 
            onBlur={() => setOpen(false)}
          >
            <h3 className="text-lg font-semibold mb-2 text-green-400">Entrar</h3>
            
            {/* Campos de login */}
            <input 
              type="text" 
              placeholder="Usuário" 
              className="w-full p-2 bg-gray-800 border border-green-400 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input 
              type="password" 
              placeholder="Senha" 
              className="w-full p-2 bg-gray-800 border border-green-400 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            {/* Botão de login */}
            <button className="w-full bg-green-500 p-2 text-white rounded-lg hover:bg-green-600 transition duration-300">
              Acessar
            </button>

            {/* Separador */}
            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-green-400"></div>
              <span className="px-2 text-gray-400 text-sm">ou</span>
              <div className="flex-grow border-t border-green-400"></div>
            </div>

            {/* Botão de login com Google */}
            <button className="w-full flex items-center justify-center bg-white text-black p-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              <FaGoogle className="mr-2 text-red-500" />
              Entrar com Google
            </button>

            {/* Link para cadastro */}
            <p className="text-sm text-gray-400 mt-3 text-center">
              Não tem uma conta?{" "}
              <a href="#" className="text-green-400 hover:underline">Cadastre-se</a>
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};
