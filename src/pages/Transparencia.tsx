// src/pages/Transparencia.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Transparencia: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-6">
          Portal da Transparência
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 whitespace-pre-line">
          {`Relatório de Transparência de Despesas – Tocantinópolis Esporte Clube
            Em cumprimento às legislações vigentes, como a Lei Federal nº 12.527/2011 (Lei de Acesso à Informação) e a Lei Complementar nº 101/2000 (Lei de Responsabilidade Fiscal), o Tocantinópolis Esporte Clube apresenta este relatório, que abrange todos os gastos realizados pelo clube.
            O objetivo deste documento é fornecer informações claras e objetivas sobre a destinação dos recursos, permitindo uma análise criteriosa de cada despesa. Dessa forma, reforçamos o compromisso do clube com a prestação de contas e a gestão responsável, fortalecendo a confiança de torcedores, associados e demais interessados.
            As informações contidas neste relatório são provenientes dos registros contábeis oficiais e são divulgadas de forma transparente, em conformidade com as normas legais aplicáveis. Todos os dados estão disponíveis no sítio eletrônico oficial do Tocantinópolis Esporte Clube, garantindo amplo acesso e visibilidade para a comunidade.
            Com a divulgação deste relatório, reafirmamos nosso compromisso com a excelência na administração dos recursos, assegurando que cada despesa seja realizada com responsabilidade, eficiência e em total conformidade com a legislação.`}
        </p>

        {/* Seção de Relatórios em PDF */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Relatórios Disponíveis
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between border border-green-400 p-4 rounded-lg">
              <span>Demostrações contábeis 2023/2024: </span>
              <a
                href="/pdf/relatorio-tec23_24.pdf"
                download
                className="text-green-400 hover:underline"
              >
                Baixar PDF
              </a>
            </li>
                 <li className="flex items-center justify-between border border-green-400 p-4 rounded-lg">
              <span>Demostrações contábeis 2022/2023: </span>
              <a
                href="/pdf/relatorio-tec22_23.pdf"
                download
                className="text-green-400 hover:underline"
              >
                Baixar PDF
              </a>
            </li>
          </ul>
        </div>

        {/* Botão de Voltar */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition duration-300">
            Voltar
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transparencia;
