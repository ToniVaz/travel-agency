export default function WhyChooseUs() {
  return (
    <div className="bg-white">
      {/* Primera sección: Imagen + Texto */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team working"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:w-1/2 bg-[#1e2939] text-white">
          <h2 className="text-3xl font-bold mb-4">
          Coordiná una charla<br></br> y despejá todas tus dudas 
          </h2>
          <p className="text-sm text-gray-300 mb-6">
          Podés solicitar una reunión totalmente sin compromiso.
           Nuestro equipo especializado se acercará para conversar con ustedes, responder todas sus dudas sobre precios, destinos, financiación y opciones de viaje.
          {/* ¡! */}
          </p>
          <button className="w-fit text-white font-semibold py-2 px-4 border border-[#e6e6e6] text-black px-6 py-2 rounded-full hover:bg-[#ffffff] hover:text-[#1e2939] transition-all duration-300 cursor-pointer">
          Pedí tu reunión →
            </button>
        </div>
      </div>

      {/* Segunda sección: Beneficios */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">
VIBES 2025 - 😎​
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
        ¿Por qué elegir a Bull Travel para tu viaje de estudios?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
  {/* Item 1 */}
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-[#537799] rounded-full text-white text-xl flex items-center justify-center w-10 h-10">
      🔥​
      </div>
      <h4 className="text-lg font-semibold">¿Por qué viajar con Bull Travel?</h4>
    </div>
    <p className="text-sm text-gray-600">
      Planificamos tu viaje desde el primer encuentro.
      Coordinamos reuniones informativas sin compromiso para contarte todo: destinos, fechas, precios, formas de pago y más. Queremos que tomes la mejor decisión, con toda la información clara.
    </p>
  </div>

  {/* Item 2 */}
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-[#537799] rounded-full text-white text-xl flex items-center justify-center w-10 h-10">
        🎉
      </div>
      <h4 className="text-lg font-semibold">¿Por qué hacerlo con nosotros?</h4>
    </div>
    <p className="text-sm text-gray-600">
      Porque sabemos lo que significa un viaje de egresados.
      Fiestas temáticas, actividades exclusivas, souvenirs, excursiones y muchas sorpresas. Cada viaje está pensado para que sea una experiencia divertida, emotiva y 100% inolvidable.
    </p>
  </div>

  {/* Item 3 */}
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-[#537799] rounded-full text-white text-xl flex items-center justify-center w-10 h-10">
        🛡
      </div>
      <h4 className="text-lg font-semibold">¿Por qué elegirnos?</h4>
    </div>
    <p className="text-sm text-gray-600">
      Porque además de diversión, damos tranquilidad.
      Contamos con asistencia médica, seguros, transporte seguro, hospedajes verificados y acompañamiento permanente. Tu grupo va a estar cuidado antes, durante y después del viaje.
    </p>
  </div>
</div>
      </div>
    </div>
  )
}
