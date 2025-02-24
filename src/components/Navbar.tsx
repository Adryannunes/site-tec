import React, { useState, useRef, useEffect } from "react";
import { FaGoogle, FaBars, FaTimes } from "react-icons/fa"; // Ícones
import logoTec from "../images/tec.png"; // Importando a logo corretamente
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement | null>(null);

  // Fecha o pop-up se o usuário clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
    };

    if (loginOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [loginOpen]);



  return (
    <nav className="bg-gradient-to-b from-black to-gray-900 text-white p-4 flex justify-between items-center shadow-lg shadow-green-500/50 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoTec} alt="Logo" className="h-12 drop-shadow-lg" />
        <span className="text-xl font-bold text-green-400">Tocantinópolis EC</span>
      </div>

      {/* Ícone do menu hambúrguer no mobile */}
      <button
        className="md:hidden text-green-400 text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links centrais - Desktop */}
      <div className="hidden md:flex space-x-10 text-xl font-medium ml-[-150px]"> {/* Ajustado para mover os links mais à esquerda */}
        <a href="#elenco" className="hover:text-green-400 transition duration-300">Elenco</a>
        <a className="hover:text-green-400 transition duration-300">
  <Link to="/transparencia">Transparência</Link>
</a>
        <a href="https://www.lojadoclube.com.br/tocantinopolis" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">Loja</a>
        <a href="https://pt.wikipedia.org/wiki/Tocantin%C3%B3polis_Esporte_Clube" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
        História
        </a>
        <a href="https://ge.globo.com/to/futebol/times/tocantinopolis/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
        Noticias
        </a>
      </div>

      {/* Botão de login - Desktop */}
      <div className="hidden md:block relative">
        <button 
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 shadow-md shadow-green-400/50"
          onClick={() => setLoginOpen(!loginOpen)}
        >
          Login
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button 
            className="absolute top-5 right-5 text-green-400 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <nav className="flex flex-col space-y-6 text-2xl font-medium ">
            <a href="#elenco" className="hover:text-green-400 transition duration-300 ">Elenco</a>
            <a href="#" className="hover:text-green-400 transition duration-300">História</a> {/* Novo link no mobile */}
            <a className="hover:text-green-400 transition duration-300">
  <Link to="/transparencia">Transparência</Link>
</a>
            <a href="#" className="hover:text-green-400 transition duration-300">Loja</a>
            <a href="#" className="hover:text-green-400 transition duration-300">Notícias</a>
            <button 
              className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 shadow-md shadow-green-400/50"
              onClick={() => {
                setLoginOpen(true);
                setMenuOpen(false);
              }}
            >
              Login
            </button>
          </nav>
        </div>
      )}

      {/* Pop-up de Login */}
      {loginOpen && (
        <div 
          ref={loginRef}
          className="absolute top-20 right-5 w-80 bg-gray-900 text-white p-5 rounded-lg shadow-lg shadow-green-500/50 border border-green-400 z-50"
        >
          <h3 className="text-lg font-semibold mb-3 text-green-400">Entrar</h3>
          
          {/* Campos de login */}
          <input 
            type="text" 
            placeholder="Usuário" 
            className="w-full p-2 bg-gray-800 border border-green-400 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full p-2 bg-gray-800 border border-green-400 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
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
    </nav>
  );
};
