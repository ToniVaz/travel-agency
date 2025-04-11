// components/ContactFooter.jsx

export default function ContactFooter() {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-16">
        {/* Contact CTA */}
        <div className="max-w-5xl mx-auto text-center px-6 pb-16 border-b border-gray-700">
          <h3 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">Contacto</h3>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            ¿Listos para la aventura?
            <br />
            ¡Escribinos y empecemos a planear el viaje ideal!
          </h2>
  
          <div className="mt-6 text-yellow-400 text-xl">★★★★★</div>
        </div>
  
        {/* Footer */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
          <div>
            <div className="font-bold text-white text-xl mb-2">Viajes Egresados</div>
            <p className="text-sm">egresados2024@viajes.com</p>
            <p className="text-sm">+54 9 11 1234 5678</p>
          </div>
  
          <div className="flex flex-col gap-2">
            <h4 className="uppercase text-sm font-semibold text-white">Explorar</h4>
            <a href="#" className="text-sm hover:underline">Destinos</a>
            <a href="#" className="text-sm hover:underline">Actividades</a>
            <a href="#" className="text-sm hover:underline">Testimonios</a>
          </div>
  
          <div className="flex flex-col gap-2">
            <h4 className="uppercase text-sm font-semibold text-white">Redes</h4>
            <a href="#" className="text-sm hover:underline">Instagram</a>
            <a href="#" className="text-sm hover:underline">Facebook</a>
            <a href="#" className="text-sm hover:underline">YouTube</a>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 pb-6">
          © {new Date().getFullYear()} Viajes Egresados. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  