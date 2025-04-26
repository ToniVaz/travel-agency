"use client";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil

  const navItems = [
    { label: "Facebook", link: "https://facebook.com", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="24" width="24">
        <defs>
          <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
            <stop offset="0%" stop-color="#0062E0" />
            <stop offset="100%" stop-color="#19AFFF" />
          </linearGradient>
        </defs>
        <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
        <path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
      </svg>
    ) },
    { label: "Instagram", link: "https://instagram.com", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
        <path fill="#0A0A08" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z" />
      </svg>
    ) },
    { label: "Nuestros servicios", link: "#servicios", icon: "" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-md font-sans">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Left */}
        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className="flex items-center gap-2 border border-white/60 rounded-full px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.72 13.06c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15s-.74.93-.91 1.12c-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.33-1.42-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.19 2 3.07 4.84 4.31.68.29 1.22.46 1.63.59.68.21 1.3.18 1.79.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.11-.26-.17-.55-.31z"/>
            </svg>
            Contacto
          </a>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ label, link, icon }) => (
            <a
              key={label}
              href={link}
              onClick={() => setActive(label)}
              className={`text-white px-6 py-2 border border-white/30 rounded-full text-sm transition relative overflow-hidden
                ${active === label ? "bg-white text-black shadow-lg" : "hover:bg-white hover:text-black"}`}
            >
              {icon ? icon : label}
              {active === label && (
                <span className="absolute inset-0 border border-white/50 rounded-full animate-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center md:order-3">
          <a href="/" className="flex items-center">
            <img
              src="/bull2025.svg"
              className="h-12 md:h-20"
              alt="BullTravel Logo"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} flex flex-col items-center space-y-4 bg-white p-6`}>
        {navItems.map(({ label, link, icon }) => (
          <a
            key={label}
            href={link}
            onClick={() => setActive(label)}
            className={`w-full text-center text-black px-6 py-2 border border-black/30 rounded-full text-sm transition relative
                ${active === label ? "bg-black text-white shadow-lg" : "hover:bg-black hover:text-white"}`}
          >
            {icon ? icon : label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <a href="/" className="flex items-center">
          <img
            src="/bull2025.svg"
            className="h-12 md:h-20"
            alt="BullTravel Logo"
          />
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
