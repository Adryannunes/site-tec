import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Lista de imagens divididas por categorias
const goleiros = [
  "https://www.folhadobico.com.br/wp-content/arquivo/2024/12/alan-maia.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
];

const defensores = [
  "https://www.folhadobico.com.br/wp-content/arquivo/2022/05/1-34.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://www.folhadobico.com.br/wp-content/arquivo/2024/12/alan-maia.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
];

const meias = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyou6mwNyrFX2S0mD1PQRq4l0aoRE0gVyZg&s",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://www.folhadobico.com.br/wp-content/arquivo/2024/12/alan-maia.jpg",
  "https://www.folhadobico.com.br/wp-content/arquivo/2024/12/alan-maia.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
"https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
"https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
];

const atacantes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Qr6sWwa3cxrO55uaBaBEFqVTT7hrUv3N2g&s",
  "https://tvjaguarnews.com.br/uploads/images/2023/04/image_750x_644098d45596a.jpg",
 "https://www.folhadobico.com.br/wp-content/arquivo/2024/12/alan-maia.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67DmNSougAxKLTCp5JuE4Cv5spUQNt0igIg&s",
 
];

export const Elenco: React.FC = () => {
  return (
    <div
      id="elenco"
      className="w-full flex flex-col items-center justify-center bg-black text-white font-poppins px-4 pt-0"
    >
      {/* Título */}
      <h2 className="text-4xl md:text-7xl font-extrabold text-green-400 text-center font-bebas mb-6">
        Elenco
      </h2>

      {/* Carrossel dos Goleiros */}
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Goleiros</h3>
      <div className="w-full max-w-6xl mb-8">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {goleiros.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Goleiro ${index + 1}`}
                className="w-45 h-45 md:w-48 md:h-48 object-cover rounded-full border-4 border-neon-green shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carrossel dos Defensores */}
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Defensores</h3>
      <div className="w-full max-w-6xl mb-8">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {defensores.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Defensor ${index + 1}`}
                className="w-45 h-45 md:w-48 md:h-48 object-cover rounded-full border-4 border-neon-green shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carrossel dos Meias */}
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Meias</h3>
      <div className="w-full max-w-6xl mb-8">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {meias.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Meia ${index + 1}`}
                className="w-45 h-45 md:w-48 md:h-48 object-cover rounded-full border-4 border-neon-green shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carrossel dos Atacantes */}
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Atacantes</h3>
      <div className="w-full max-w-6xl mb-8">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-lg"
        >
          {atacantes.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Atacante ${index + 1}`}
                className="w-45 h-45 md:w-48 md:h-48 object-cover rounded-full border-4 border-neon-green shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
