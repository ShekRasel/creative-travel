export default function TravelMarquee() {
  const items = [
    "✈️ Explore Hidden Destinations",
    "🏝️ Island Escapes & Beaches",
    "🗺️ Plan Your Next Adventure",
    "🏔️ Mountain Treks & Nature Trails",
    "🌆 City Break Inspirations",
    "🚂 Scenic Travel Routes",
  ];

  return (
    <div className="overflow-hidden py-4 mt-24">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-lg font-medium text-[#0055D4]">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
