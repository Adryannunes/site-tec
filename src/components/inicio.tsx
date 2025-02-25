import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Importando as imagens
import titulo1 from "../images/Tocantinópolis Tocantinense 2023.jpg";
import titulo2 from "../images/Tocantinópolis Tocantinense 2022.jpg";
import titulo3 from "../images/Tocantinópolis Tocantinense 2021.webp";
import titulo4 from "../images/titulo15.webp";
import titulo5 from "../images/titulo93.webp";

const imagensTitulos = [titulo1, titulo2, titulo3, titulo4, titulo5];

export const Inicio: React.FC = () => {
  return (
    <div className="w-full md:min-h-screen flex flex-col items-center justify-start bg-black text-white font-poppins px-4 pt-5">
      
      {/* Título de boas-vindas */}
      <h1 className="text-4xl md:text-8xl font-extrabold text-green-400 text-center leading-tight font-bebas">
       O Maior Time do Tocantins
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 text-center max-w-3xl mt-4 px-2">
        Com <span className="text-green-400">6 títulos estaduais</span>, o
        <span className="text-green-400"> Tocantinópolis EC </span>
        é o gigante do TOCANTINS!
      </p>

      {/* Carrossel de títulos */}
      <div className="w-full max-w-[1750px] mt-1">
  <Swiper
    modules={[Pagination, Navigation, Autoplay]}
    spaceBetween={15}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    className="rounded-lg"
  >
    {imagensTitulos.map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-[18/7]">
          <img
            src={img}
            alt={`Título ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};
