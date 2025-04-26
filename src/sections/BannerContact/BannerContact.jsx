export default function InfoUtilSection() {
  return (
    <section className="bg-[#3b0086] py-10 px-6">
      <div className="max-w-7xl mx-auto text-white text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">¿Querés saber más sobre Bull Travel?</h2>
        <p className="mt-2 text-cyan-100">Acá te dejamos info clave para que te sumes con confianza</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-white">
        {/* ¿Cómo funciona Bull Travel? */}
        <div className="flex items-start gap-4 text-center md:text-left max-w-xs">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shrink-0">💲​</div>
          <div>
            <p className="font-semibold">Los mejores precios</p>
            <a href="/faq" className="text-cyan-300 underline hover:text-cyan-200">
            Pedí tu cotización ahora
            </a>
          </div>
        </div>

        {/* ¿Sos representante del cole? */}
        <div className="flex items-start gap-4 text-center md:text-left max-w-xs">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shrink-0">🧑‍🎓</div>
          <div>
            <p className="font-semibold">¿Sos representante del aula?</p>
            <a href="/contacto" className="text-cyan-300 underline hover:text-cyan-200">
              Coordiná una reunión...
            </a>
          </div>
        </div>

        {/* Experiencias de otros cursos */}
        <div className="flex items-start gap-4 text-center md:text-left max-w-xs">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shrink-0">👨‍🏫</div>
          <div>
            <p className="font-semibold">Asesoramiento integral</p>
            <a href="/testimonios" className="text-cyan-300 underline hover:text-cyan-200">
            Agendá una charla
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
