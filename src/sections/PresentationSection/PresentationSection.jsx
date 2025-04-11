const PresentationSection = () => {
    return (
      <section className="bg-white text-black px-6 md:px-32 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10 uppercase">
            Viví tu <span className="text-orange-500">viaje escolar</span><br />
            con nosotros
          </h2>
  
          <div className="text-gray-700 space-y-6 text-lg leading-relaxed mb-12">
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
            <span className="px-5 py-2 text-sm bg-black text-white rounded-full">Precios accesibles</span>
            <span className="px-5 py-2 text-sm border border-black rounded-full">Cobertura médica</span>
            <span className="px-5 py-2 text-sm border border-black rounded-full">Viajes educativos</span>
            <span className="px-5 py-2 text-sm border border-black rounded-full">Experiencia comprobada</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default PresentationSection;
  