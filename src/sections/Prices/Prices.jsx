export default function PricingHeader() {
  return (
    <section className="relative bg-[#0f0f1a] text-white py-24 px-6 text-center overflow-hidden">
      {/* Efecto de glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-purple-600 opacity-30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Los mejores precios del mercado
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-10">
          Flexible y transparente. Diseñado para que puedas vivir tu viaje sin preocuparte por su costo.
        </p>

        {/* Toggle visual (no funcional) */}
        <div className="inline-flex bg-[#1a1a2e] text-sm rounded-full overflow-hidden border border-gray-600 uppercase">
          <button className="px-5 py-2 bg-white text-black font-semibold uppercase">Viajá</button>
          <button className="px-5 py-2 text-white relative">
             <span className="ml-2 text-green-400 font-semibold uppercase">Barato</span>
          </button>
        </div>
      </div>
    </section>
  );
}
