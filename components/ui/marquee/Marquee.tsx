export default function TravelMarquee() {
  const items = [
    { icon: "✈️", text: "Explore Hidden Destinations" },
    { icon: "🏝️", text: "Island Escapes & Beaches" },
    { icon: "🗺️", text: "Plan Your Next Adventure" },
    { icon: "🏔️", text: "Mountain Treks & Nature Trails" },
    { icon: "🌆", text: "City Break Inspirations" },
    { icon: "🚂", text: "Scenic Travel Routes" },
  ];

  return (
    <div className="relative overflow-hidden py-3 border-t border-stone-700/50">
      {/* Subtle gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-stone-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-stone-800 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-sm font-light tracking-wide text-white/60"
          >
            <span className="text-amber-400/80 text-base">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
