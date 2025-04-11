// components/TravelCards.jsx

export default function TravelCards() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
        
        {/* Card 1: Imagen izquierda */}
        <div className="flex-1 rounded-2xl overflow-hidden relative h-[400px] group">
          <img
            src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Traveller"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 p-6 text-white">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-2xl">🧍‍♀️</span>
        COBERTURA MÉDICA
            </div>
          </div>
        </div>

        {/* Card 2: Texto central */}
        <div className="flex-1 bg-[#ff4e13] rounded-2xl p-6 flex flex-col justify-start text-white h-[400px]">
          <div className="text-3xl mb-4">🔗</div>
          <h3 className="text-lg font-bold mb-2">VIAJÁ ASEGURADO</h3>
          <p className="text-sm leading-relaxed">
        Con cobertura médica las 24 horas, viajás con la tranquilidad de estar siempre protegido. 
          </p>
        </div>

        {/* Card 3: Imagen derecha */}
        <div className="flex-1 rounded-2xl overflow-hidden relative h-[400px] group">
          <img
            src="https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNhbXBhciUyMGFtaWdvc3xlbnwwfDF8MHx8fDA%3D"
            alt="Hostel"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 p-6 text-white">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-2xl">💬</span>
              Join Your Hostel’s Chat
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
