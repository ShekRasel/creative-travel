import Link from "next/link";

const ArticlesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-stone-800 text-white py-16 md:py-24 overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-amber-400/80 font-medium bg-amber-400/10 px-4 py-1.5 rounded-full mb-4 border border-amber-400/20">
          Our Journal
        </span>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
          Stories from the <br className="hidden sm:block" />
          <span className="text-amber-300">open road</span>
        </h1>

        {/* Description */}
        <p className="text-stone-300/80 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Curated tales of adventure, discovery, and the beauty of
          slowing down — written by travelers, for travelers.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 pt-6 border-t border-stone-700/50">
          <div>
            <div className="text-2xl md:text-3xl font-light text-amber-400">
              200+
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400">
              Articles
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-light text-amber-400">
              12K
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400">
              Readers
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-light text-amber-400">
              50+
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400">
              Destinations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesHero;