import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4 sticky top-0 z-0 relative">
      <Image
        src="/images/desert2.webp"
        alt="Desert picture"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 max-w-sm w-full bg-white p-6 shadow-xl rounded-sm text-center flex flex-col items-center cursor-pointer">
        <div className="relative h-52 w-full mb-6 overflow-hidden rounded-xl">
          <Image
            src="/images/desert3.webp"
            alt="Wild Camping Along Tasmania's East Coast"
            fill
            className="object-cover"
          />
        </div>

        <span className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-2">
          Featured article
        </span>

        <h2 className="text-xl font-semibold text-stone-800 leading-snug max-w-62.5">
          Wild Camping Along Tasmania’s East Coast
        </h2>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center font-medium text-white mix-blend-difference">
        <span>Scroll for more</span>
        <span className="mt-1 animate-bounce">↓</span>
      </div>
    </div>
  );
};

export default HeroSection;
