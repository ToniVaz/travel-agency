"use client"; 

import { useState } from "react";

const audienceData = [
  {
    label: "Secundaria",
    emoji: "🎓",
    title: "El viaje de egresados que soñaste",
    text: "Diversión, amigos y un cierre de etapa como se merece. Nuestro equipo lo hace posible de forma segura y memorable.",
    image: "https://college.soulmax.com/wp-content/uploads/home-header-mobile-mar.jpg",
  },

  {
    label: "Primaria",
    emoji: "🎒",
    title: "Aventuras que se convierten en recuerdos inolvidables",
    text: "Ofrecemos viajes educativos y recreativos con actividades pensadas para que cada grado viva una experiencia única.",
    image: "https://educanew.com/wp-content/uploads/2024/07/Ninos-excursion-verano-1536x984.jpg",
  },
  {
    label: "Jardín",
    emoji: "🧸",
    title: "Viajes mágicos para los más pequeños",
    text: "Creamos experiencias seguras, llenas de juegos, risas y aprendizaje para los chicos y chicas del jardín.",
    image: "https://cdn.barrabes.com/blogs/large/22949.jpg",
  },

];

export default function TravelAudienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = audienceData[activeIndex];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen dinámica */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <img
            src={current.image}  // Cambiar la imagen según el índice activo
            alt={current.label}  // El alt es dinámico, también con base en el label
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto dinámico */}
        <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
Los servicios que<br /> ofrecemos en Bull-Travel:
</h2>
<p className="text-gray-600 mb-8">
Propuestas diseñadas para adaptarse a cada destino y experiencias a medida
</p>
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {audienceData.map((audience, index) => (
              <button
                key={audience.label}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#1e2939] text-white border-[#1e2939]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {audience.emoji} {audience.label}
              </button>
            ))}
          </div>

          {/* Contenido del slide */}
          <div
            key={current.label}
            className="transition-all duration-500 ease-in-out"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{current.title}</h2>
            <p className="text-gray-600 mb-6">{current.text}</p>
            <button className="inline-flex items-center gap-2 border border-[#1e2939] text-black px-6 py-2 rounded-full hover:bg-[#1e2939] hover:text-white transition-all duration-300 cursor-pointer">
              Conocé más →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
