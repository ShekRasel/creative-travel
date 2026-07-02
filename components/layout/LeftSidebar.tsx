import Navbar from "@/components/layout/Navbar";
import TravelMarquee from "@/components/ui/marquee/Marquee";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <h1 className="text-center mt-30 text-7xl font-extrabold  leading-[0.82] tracking-tighter text-[#0055D4]">
        The Roam Report
      </h1>
      <p className="text-center text-blue-500 mt-10 text-xl">
        Stories and photos of long walks,
        <br />
        wrong turns, and everyday discoveries
      </p>

      {/* logo */}
      <div className="flex items-center justify-center mt-10">
        <Image
          height={300}
          width={350}
          alt="travel logo"
          src={"/images/travel.webp"}
          className="rounded-xl"
        />
      </div>

      {/* marquee */}
      <TravelMarquee />
    </div>
  );
};

export default LeftSidebar;
