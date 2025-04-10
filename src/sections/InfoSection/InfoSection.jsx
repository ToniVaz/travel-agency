const cards = [
    {
      id: "01",
      title: "Oceanview Suite",
      text: "Despertate con una vista al amanecer desde tu balcón privado.",
      tags: ["Amanecer", "Balcón"],
      image:
        "https://chic.com.py/wp-content/uploads/2024/08/CANC%C3%9AN-VIAJE-ESCOLAR_DSC08985_VSCO_28932949-1.jpg",
    },
    {
      id: "02",
      title: "Private Pool Villa",
      text: "Lujo total con pileta infinita privada y servicio de mayordomo 24/7.",
      tags: ["Pileta", "Lujo"],
      image:
        "https://rosarionuestrocdn.eleco.com.ar/media/2018/08/aerosilla-bariloche.jpg",
    },
    {
      id: "03",
      title: "Garden Retreat Room",
      text: "Disfrutá una estadía rodeada de jardines tropicales.",
      tags: ["Tropical", "Jardines"],
      image:
        "https://college.soulmax.com/wp-content/uploads/Porto-Fiestas-07.jpg",
    },
  ];
  
  const InfoSection = () => {
    return (
      <section className="relative py-12 md:py-16 px-6 md:px-12 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
          {cards.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center"
            >
              <div className="text-sm text-gray-400 mb-2">{item.id}</div>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-[2rem] aspect-[4/3] object-cover w-full mb-4"
              />
              <div className="flex gap-2 mb-4">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-center text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default InfoSection;
  