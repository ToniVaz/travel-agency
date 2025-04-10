"use client";

import React, { useState, useEffect } from "react";

const ImageComponent = ({ src, isMobile }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={src}
      alt="member"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      className={`object-cover transition-all duration-500 ease-in-out
        ${isMobile 
          ? `${hovered ? "w-[300px]" : "w-[100px]"} h-full` 
          : `${hovered ? "w-[500px] contrast-125 z-10" : "w-[80px]"} h-full w-[310px]`
        }
      `}
    />
  );
};

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
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleImages = isMobile ? allImages.slice(0, 4) : allImages;

  return (
    <div className="flex h-[600px] justify-center items-center overflow-hidden">
      {visibleImages.map((src, index) => (
        <ImageComponent key={index} src={src} isMobile={isMobile} />
      ))}
    </div>
  );
};

export default FeaturedImage;
