// src/sections/IntroSection.jsx

const benefits = [
    { icon: "🏖️", title: "Private Beach" },
    { icon: "🌅", title: "Ocean Views" },
    { icon: "🍽️", title: "Seaside Dining" },
    { icon: "🧖‍♀️", title: "Exclusive Spa" },
  ];
  
  const IntroSection = () => {
    return (
<section
  className="text-gray-800 pt-10 pb-1 px-6 md:px-12 relative"
  // style={{ backgroundColor: "#f5cd52" }}
>
  <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          <span className="font-bold text-black">La mejor aventura</span> de tu vida<br />
          <span className="text-gray-500">la vivis con Bull Travel</span>
        </h2>
          {/* Iconos */}
          {/* <div className="mt-12 flex flex-wrap justify-center gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-4xl">{item.icon}</div>
                <div className="mt-2 text-sm font-medium">{item.title}</div>
              </div>
            ))}
          </div> */}
  
          {/* Texto pequeño abajo */}
          {/* <p className="mt-10 text-gray-600 text-sm max-w-md mx-auto">
          Experiencia en viajes de egresados, de estudios, dias de campo y mucho más
          </p> */}
        </div>
      </section>
    );
  };
  
  export default IntroSection;
  