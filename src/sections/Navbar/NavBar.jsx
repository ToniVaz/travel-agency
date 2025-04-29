"use client";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    // {
    //   label: "Facebook",
    //   link: "https://facebook.com",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="24" width="24">
    //       <defs>
    //         <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
    //           <stop offset="0%" stopColor="#0062E0" />
    //           <stop offset="100%" stopColor="#19AFFF" />
    //         </linearGradient>
    //       </defs>
    //       <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
    //       <path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Instagram",
    //   link: "https://instagram.com",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    //       <path fill="#0A0A08" d="M128 23.064c34.177 0 38.225.13 51.722.745 ... (acortado por brevedad) ..." />
    //     </svg>
    //   ),
    // },
    { label: "Nuestros servicios", link: "#servicios", icon: "" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-md font-sans">
      {/* Top bar */}
      <div className="max-w-screen-xl flex justify-between items-center mx-auto px-4 py-2">
        {/* Logo (siempre visible) */}
        <a href="/" className="flex items-center">
          <img src="/bull2025.svg" className="h-12 md:h-20" alt="BullTravel Logo" />
        </a>

        {/* Botón hamburguesa solo en mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1e2939] text-2xl"
          aria-label="Abrir menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {/* Menú horizontal en desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(({ label, link, icon }) => (
            <a
              key={label}
              href={link}
              onClick={() => setActive(label)}
              className={`text-[#1e2939] px-6 py-2 border border-white/30 rounded-full text-sm transition relative overflow-hidden
                ${active === label ? "bg-white text-black shadow-lg" : "hover:bg-white hover:text-black"}`}
            >
              {icon || label}
              {active === label && (
                <span className="absolute inset-0 border border-white/50 rounded-full animate-pulse" />
              )}
            </a>
          ))}

          {/* Botón de contacto en desktop */}
          <a
            href="#contacto"
            className="flex items-center gap-2 border border-white/60 rounded-full px-5 py-2 text-sm text-[#1e2939] transition hover:bg-white hover:text-black"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.72 13.06c...z" />
            </svg>
            Contacto
          </a>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white p-6 flex flex-col items-center space-y-4">
          {navItems.map(({ label, link, icon }) => (
            <a
              key={label}
              href={link}
              onClick={() => setActive(label)}
              className={`w-full text-center text-black px-6 py-2 border border-black/30 rounded-full text-sm transition
                ${active === label ? "bg-black text-[#1e2939] shadow-lg" : "hover:bg-black hover:text-white"}`}
            >
              {icon || label}
            </a>
          ))}

          {/* Botón de contacto también en mobile */}
          <a
            href="#contacto"
            className="w-full text-center flex justify-center items-center gap-2 border border-black rounded-full px-5 py-2 text-sm text-black transition hover:bg-black hover:text-white"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.72 13.06c...z" />
            </svg>
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
