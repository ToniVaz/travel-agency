const PresentationSection = () => {
  const gradientFrom = '#537799';
  const gradientVia = '#6ae2e0';
  const gradientTo = '#b5e3f0';

  return (
    <section
      className="relative font-sans text-gray-800 py-20 px-6 md:px-10 text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
      }}
    >
      <div className="max-w-5xl mx-auto relative z-20"  style={{fontFamily:"Geist"}}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-10 uppercase tracking-wide">
          <span className="text-white">¿QUIÉNES</span> SOMOS?
        </h2>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 space-y-6 leading-relaxed mb-12">
            Somos una empresa con vasta experiencia en traslados de contingentes de fin de curso y de viajes educativos de jardín, primarios y secundarios.<br></br>
            Ofrecemos los mejores precios para que tu viaje de egresados sea posible. Además, contamos con cobertura médica y seguro en todos nuestros paquetes.<br></br>
            Llamanos y armá tu viaje de fin de curso con confianza y diversión asegurada.<br></br>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Precios accesibles',
            'Cobertura médica',
            'Viajes educativos',
            'Experiencia comprobada',
          ].map((tag, index) => (
            <span
              key={index}
              className="px-5 py-2 text-sm sm:text-base rounded-full transition-all duration-300 bg-[#1e2939] text-white hover:bg-white hover:text-[#1e2939] cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
