"use client";
import { useState } from "react";
import Navbar from "../Navbar/NavBar";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60"
        />
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </picture>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-10" />

      {/* Navbar */}
         <Navbar/>
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-[#1e2939] px-4 drop-shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold">
        ¡BULL TRAVEL!
        </h1>
        <p className="text-lg lg:text-2xl mb-6 max-w-xl">
            Viajes de egresados y educativos para jardín, primaria y secundaria.
          </p>
          <a
  href="#contacto"
  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
>
  ¡Armá tu viaje!
</a>

      </div>
    </div>
  );
};

export default Hero;
