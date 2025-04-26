const PresentationSection = () => {

  const gradientFrom = '#537799'; // Color inicial del degradado
const gradientVia = '#6ae2e0';  // Color intermedio
const gradientTo = '#b5e3f0';   // Color final

  return (
<section
  className="relative text-gray-800 py-24 px-6 text-center"
  style={{
    backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`
  }}
>
      <div className="max-w-6xl mx-auto text-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10 uppercase">
        <span style={{color:"white"}}>¿QUIENES</span> SOMOS?<br />
        </h2>

        <div className="text-gray-700 space-y-6 text-2xl leading-relaxed mb-12">
  <p>
    Somos una empresa con basta experiencia en traslados de contingentes de fin de curso y de viajes educativos de jardín, primarios y secundarios.
  </p>
  <p>
    Ofrecemos los mejores precios para que tu viaje de egresados sea posible. Además, contamos con cobertura médica y seguro en todos nuestros paquetes.
  </p>
  <p>
    Llamanos y armá tu viaje de fin de curso con confianza y diversión asegurada.
  </p>
</div>


        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Precios accesibles',
            'Cobertura médica',
            'Viajes educativos',
            'Experiencia comprobada',
          ].map((tag, index) => (
            <span key={index} className="px-5 py-2 text-sm rounded-full transition-all duration-300 bg-[#1e2939] text-white hover:bg-white hover:text-[#1e2939] cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;

