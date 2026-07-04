import Navbar from "@/components/layout/Navbar";
import TravelMarquee from "@/components/ui/marquee/Marquee";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-stone-900 to-stone-800 text-white p-6 md:p-8 overflow-y-auto">
      {/* Navigation - top */}
      <div className="flex justify-center">
        <Navbar />
      </div>

      {/* Logo / Brand */}
      <div className="flex flex-col items-center justify-center flex-1 mt-6">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-amber-400/30 shadow-xl shadow-amber-500/10">
          <Image
            src="/images/travel.webp"
            alt="The Roam Report"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mt-6 leading-[1.1] text-center">
          The Roam
          <br />
          Report
        </h1>

        <p className="text-sm md:text-base text-stone-300/80 text-center mt-3 max-w-xs mx-auto leading-relaxed">
          Stories and photos of long walks,
          <br />
          wrong turns, and everyday discoveries
        </p>
      </div>

      {/* Marquee - at bottom */}
      <div className="mt-auto pt-6 border-t border-stone-700/50">
        <TravelMarquee />
      </div>
    </div>
  );
};

export default LeftSidebar;
