import TravelArticles from "@/components/TravelArticles";
import ArticlesHero from "@/components/ArticlesHero";
import FeaturedArticles from "@/components/FeaturedArticles";
import NewsletterBanner from "@/components/NewsletterBanner";
import ArticlesFilter from "@/components/ArticlesFilter";

export const metadata = {
  title: "All Articles | The Roam Report",
  description:
    "Explore all travel stories, guides, and adventures from The Roam Report.",
};

const ArticlesPage = () => {
  return (
    <main className="min-h-screen bg-stone-100">
      {/* 1. Hero Section */}
      <ArticlesHero />

      {/* 2. Container for article content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 -mt-6 relative z-10">
        {/* 3. Featured Articles */}
        <FeaturedArticles />

        {/* 4. Filter Bar */}
        <div className="mt-8">
          <ArticlesFilter />
        </div>

        {/* 5. Main Article Grid */}
        <div className="mt-8">
          <TravelArticles header="Latest Stories" />
        </div>

        {/* 6. Newsletter CTA */}
        <div className="mt-12">
          <NewsletterBanner />
        </div>
      </div>
    </main>
  );
};

export default ArticlesPage;
