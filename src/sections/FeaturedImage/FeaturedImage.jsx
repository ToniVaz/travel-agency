"use client";

import React, { useState, useEffect } from "react";

// Componente para las letras de BULL
const BullLetter = ({ index, isMobile }) => {
  const bullWord = "-BULL-";
  const mobileWord = "BULL";
  const letter = isMobile ? mobileWord[index] : bullWord[index];

  if (!letter) return null;

  if (!isMobile && letter === "-") {
    return (
      <div className="inline-block w-[50px] h-[80px]"></div>
    );
  }

  return (
    <span className="text-[#003877]  text-7xl sm:text-8xl md:text-9xl font-extrabold inline-block">
      {letter}
    </span> 
  );
};

// Componente para las letras de TRAVEL
const TravelLetter = ({ index, isMobile }) => {
  const travelWord = "TRAVEL";

  if (isMobile) return null;

  const letter = travelWord[index];

  if (!letter) return null;

  return (
    <span className="text-red-900 text-9xl sm:text-10xl md:text-12xl font-extrabold inline-block">
      {letter}
    </span>
  );
};

// Componente de cada imagen
const ImageComponent = ({ src, isMobile, index }) => {
  const [hovered, setHovered] = useState(false);

  // Hover (para escritorio y tablets)
  const handleMouseEnter = () => {
    if (!isMobile) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setHovered(false);
  };

  const handleClick = () => {
    if (isMobile) setHovered(!hovered); // En móviles, usamos click para expandir
  };



  return (
<div
  className={`relative overflow-hidden transition-all duration-500 ease-in-out
    ${hovered ? "w-[500px] contrast-125 z-10" : "w-[310px]"} h-full
  `}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        src={src}
        alt="images"
        className="object-cover w-full h-full"
      />

      {/* Capa negra encima */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out
          ${hovered ? "opacity-0" : "opacity-70"} bg-[#ffea00] `}
      >
        <div className="flex flex-col items-center">  
          <div>
            <BullLetter index={index} isMobile={isMobile} />
          </div>
          <div>
            <TravelLetter index={index} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const FeaturedImage = () => {
  const allImages = [
    "https://images.unsplash.com/photo-1597296024395-679289253fde?q=80&w=1935&auto=format&fit=crop",
    "https://college.soulmax.com/wp-content/uploads/Porto-Actividades-02.jpg",
    "https://images.unsplash.com/photo-1617655889904-fb038a076634?w=500&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1664303349447-dbec6205a7b5?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1743611847930-1dc220cd6f28?w=500&auto=format&fit=crop",
    "https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/427/0000427447.jpg",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Cambié a < 1024px, incluye tablets
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleImages = isMobile ? allImages.slice(0, 4) : allImages;

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="flex justify-center items-center h-[600px] w-full">
        {visibleImages.map((src, index) => (
          <ImageComponent
            key={index}
            src={src}
            isMobile={isMobile}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedImage;
