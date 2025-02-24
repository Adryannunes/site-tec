import React from "react";
import Slider from "react-slick"; // Importa o Slider do react-slick
import "slick-carousel/slick/slick.css"; // Estilos básicos do slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Tema do slick-carousel
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Lista de imagens do estádio
const estadio = [
  "https://www.folhadobico.com.br/wp-content/arquivo/2024/07/estadio-ribeirao-tocantinopolis3.jpg",
  "https://s2-ge.glbimg.com/QwSiXaE4SzSHnV9XH9yPV-VgbGw=/0x0:1600x957/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/h/e/6WARG1TOuUpfI8Ij1xpQ/a-tecccc.jpg",
  "https://folhadobico.com.br/wp-content/arquivo/2022/12/estadio-ribeirao.jpg",
  "https://itaguatinsnoticias.com.br/images/noticias/3160/3e287c4ab454aac9f9de40c85f11e6a7.webp",
  "https://s2-ge.glbimg.com/M4tn1HrI6sGgHXrhJCzlZvG0P9A=/0x0:1280x960/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/S/g/VLLUl1RAmQLnBdr3KWcQ/teccccc.jpeg",
];

// Estilo do container do mapa
const containerStyle = {
  width: "100%",
  height: "500px", // altura fixa para o mapa
};

// Coordenadas do estádio (ajuste conforme necessário)
const center = {
  lat: -6.3429,  
  lng: -47.4278,
};

export const Ribeirao: React.FC = () => {
  // Configurações do react-slick para responsividade
  const settings = {
    dots: true, // Indicadores de slide
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Setas de navegação
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-black text-white font-poppins px-4 pt-6">
      {/* Título principal */}
      <h2 className="text-4xl md:text-6xl font-extrabold text-green-400 text-center font-bebas mb-12">
        Nossa Casa
      </h2>

      {/* Container dos itens: carrossel e mapa */}
      <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 w-full max-w-screen-xl mx-auto">
        {/* Carrossel */}
        <div className="flex flex-col md:w-7/12 px-4 md:-mt-8">
          {/* Título do carrossel com maior espaçamento inferior */}
          <h3 className="text-lg font-semibold text-green-400 mb-1">
            Estádio: João Ribeiro "O RIBEIRÃO"
          </h3>
          {/* Container do slider com largura máxima para mobile */}
          <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-full mx-auto">
            <Slider {...settings}>
              {estadio.map((img, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={img}
                    alt={`Estádio ${index + 1}`}
                    className="w-[710px] h-[500px] object-cover rounded-lg border-4 border-neon-green shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <p className="text-xl mt-3">
            Capacidade: 10.150 espectadores
          </p>
        </div>
        {/* Mapa */}
        <div className="md:w-5/12 w-full px-3" >
          <LoadScript googleMapsApiKey="AIzaSyChij1OOFoyd4MhAg6xiviWaDg23W0S-bU">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};
