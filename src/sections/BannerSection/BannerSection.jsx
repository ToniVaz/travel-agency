// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0 py-12 lg:py-0 bg-blue-500 font-sans overflow-hidden">
      
      {/* Left content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center text-center lg:text-right px-4 sm:px-6 lg:px-12 mb-8 lg:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight">
          Cobertura médica <br className="hidden sm:block" />
          durante todo <br className="hidden sm:block" />
          tu viaje
        </h2>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2 h-64 sm:w-1/2 md:h-[400px] lg:h-auto  rounded-2sm ">
        <img
          src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?w=1200&auto=format&fit=crop&q=80"
          alt="Doctor speaking to patient"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
