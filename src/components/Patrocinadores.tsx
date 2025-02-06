import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";

const imagens = [
  "https://instagram.faux1-1.fna.fbcdn.net/v/t51.29350-15/469947461_915558014049007_5434515408977878070_n.jpg?stp=dst-jpg_e35_tt7",
  "https://instagram.faux1-1.fna.fbcdn.net/v/t51.29350-15/469714204_1111753434288360_6233594604966505327_n.jpg?stp=dst-jpg_e35_tt7",
  "https://instagram.faux1-1.fna.fbcdn.net/v/t51.29350-15/469746661_8695932770527773_5116247747962701902_n.jpg?stp=dst-jpg_e35_tt7",
  "https://instagram.faux1-1.fna.fbcdn.net/v/t51.29350-15/470277606_553719687506337_4185972956746859616_n.jpg?stp=dst-jpg_e35_tt7",
  "https://instagram.faux1-1.fna.fbcdn.net/v/t51.29350-15/470681586_1630329461243746_5352670690611668437_n.jpg?stp=dst-jpg_e35_tt7",
  "https://instagram.faux1-1.fna.fbcdn.net/v/t51.29350-15/470359651_1266315674638715_6896819793145589383_n.jpg?stp=dst-jpg_e35_tt7",
];

export const Patrocinadores: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {Array.from({ length: Math.ceil(imagens.length / 3) }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center gap-4">
              {imagens.slice(index * 3, index * 3 + 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Patrocinador ${index * 3 + i + 1}`}
                  className="w-1/3 h-40 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
