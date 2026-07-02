import HeroSection from "@/components/HeroSection";
import SiteFooter from "@/components/layout/SiteFooter";
import TravelArticles from "@/components/TravelArticles";
import UpcomingItinerary from "@/components/UpcomingItinerary";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-stone-100">
      <HeroSection />
      {/* <TravelArticles header="Letest Travels Stories" />
      <UpcomingItinerary /> */}

      <SiteFooter />
    </main>
  );
};

export default HomePage;
