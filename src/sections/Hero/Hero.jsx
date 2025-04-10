const Hero = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image with responsive support */}
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60"
          />
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </picture>
  
        {/* Overlay: Gradient at the bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-10" />
  
        {/* Nav */}
        <div className="absolute top-0 w-full h-[70px] flex justify-evenly items-center z-30">
          {["DIVERSION AL MAXIMO"].map((item) => (
            <h3
              key={item}
              className="text-black px-3 py-1 rounded-md text-sm md:text-base"
            >
              {item}
            </h3>
          ))}
        </div>
  
        {/* Text content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-white px-4 drop-shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold text-grey-500" >
            TU VIAJE SOÑADO
          </h1>
          <p className="text-base md:text-lg my-4">
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-base hover:bg-blue-700 transition">
            ¡Diversión Al Máximo!
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  