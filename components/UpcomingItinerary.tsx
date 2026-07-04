import Image from "next/image";

const UpcomingItinerary = () => {
  const itineraries = [
    {
      id: 1,
      number: "01",
      location: "Oaxaca, Mexico",
      date: "March 12 – March 25",
      description: "Formole, markets, and Monte Albán",
      image: "/images/article7.webp",
    },
    {
      id: 2,
      number: "02",
      location: "Rome, Italy",
      date: "June 9 – June 30",
      description: "Evening walks and neighborhood trattorias",
      image: "/images/article8.webp",
    },
    {
      id: 3,
      number: "03",
      location: "Lofoten, Norway",
      date: "October 20 – October 28",
      description: "Midnight sun, damp air, and drying cod",
      image: "/images/article9.webp",
    },
    {
      id: 4,
      number: "04",
      location: "Kagoshima, Japan",
      date: "Dec 3 – Dec 21",
      description: "Admire Sakurajima from the ferry",
      image: "/images/article7.webp",
    },
  ];

  return (
    <section className="relative bg-[#5F6D3B] py-16 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#86a538] mb-12 md:mb-16 tracking-tight text-center">
          Upcoming itinerary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {itineraries.map((item) => (
            <div key={item.id} className="group">
              <div className="relative w-full aspect-[4/3] bg-[#e8e6e1] rounded-2xl overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={item.image}
                  alt={item.location}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-[#d4d2cc] block leading-none">
                  {item.number}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1c1c1a] leading-tight mt-1">
                  {item.location}
                </h3>
                <p className="text-sm md:text-base font-medium text-[#8a8a86] mt-0.5">
                  {item.date}
                </p>
                <p className="text-sm md:text-base mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C240 30 480 0 720 0C960 0 1200 30 1440 80V80H0V80Z"
            fill="#e7e5e4"
          />
        </svg>
      </div>
    </section>
  );
};

export default UpcomingItinerary;