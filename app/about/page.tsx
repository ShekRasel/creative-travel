import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | The Roam Report",
  description:
    "Discover the story behind The Roam Report — slow travel, authentic stories, and a community of curious wanderers.",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* ===== HERO ===== */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/desert2.webp"
          alt="The Roam Report - About us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-amber-300/80 mb-3">
            About The Roam Report
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            Stories from the road, <br className="hidden sm:block" />
            written with intention
          </h1>
          <p className="text-base md:text-lg text-stone-200/80 max-w-2xl mx-auto font-light">
            We believe in slow travel, honest storytelling, and the magic of the
            in‑between moments.
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.15em] hidden md:block">
          Scroll to learn more
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.15em] text-amber-600/80 font-medium">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-2 mb-4 tracking-tight">
              How it all began
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Roam Report started as a personal journal on a solo trip
              through Oaxaca, Mexico. What began as scribbled notes in a leather
              notebook quickly became a ritual — capturing not just the sights,
              but the feelings, the conversations, and the quiet revelations
              that happen when you slow down.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Today, we’ve grown into a community of writers, photographers, and
              adventurers who share a single belief: that travel is less about
              the miles you cover and more about the depth you uncover. Every
              journey, whether across the globe or to a neighbouring town, holds
              a story worth telling.
            </p>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/desert3.webp"
              alt="Our journey"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border-l-4 border-amber-500/60 pl-6">
              <h3 className="text-xs uppercase tracking-[0.15em] text-amber-600/80 font-medium">
                Our Mission
              </h3>
              <p className="text-xl md:text-2xl font-light text-stone-800 leading-relaxed mt-2">
                To inspire intentional travel through honest, beautifully
                crafted stories that connect people to places — and to each
                other.
              </p>
            </div>
            <div className="border-l-4 border-stone-300 pl-6">
              <h3 className="text-xs uppercase tracking-[0.15em] text-stone-400 font-medium">
                Our Vision
              </h3>
              <p className="text-xl md:text-2xl font-light text-stone-800 leading-relaxed mt-2">
                A world where travel is a force for good — fostering curiosity,
                cultural appreciation, and a deeper sense of belonging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.15em] text-amber-600/80 font-medium">
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-2 tracking-tight">
            Our core values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Value 1 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100">
            <div className="text-4xl mb-4 text-amber-500/70 group-hover:text-amber-500 transition-colors">
              🐢
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-2">
              Slow Travel
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Moving with intention, not just to tick boxes. Staying longer,
              going deeper, and truly connecting with a place and its people.
            </p>
          </div>
          {/* Value 2 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100">
            <div className="text-4xl mb-4 text-amber-500/70 group-hover:text-amber-500 transition-colors">
              📖
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-2">
              Authentic Stories
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Real experiences from real people. No filters, no sponsored fluff
              — just honest, heartfelt storytelling.
            </p>
          </div>
          {/* Value 3 */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100">
            <div className="text-4xl mb-4 text-amber-500/70 group-hover:text-amber-500 transition-colors">
              🌍
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-2">
              Community
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              A space for fellow wanderers to share, learn, and inspire each
              other to explore with open eyes and open hearts.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <section className="bg-stone-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.15em] text-amber-400/70 font-medium">
              The Roam Report in numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-light mt-2 tracking-tight">
              Our journey so far
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-light text-amber-400">
                200+
              </div>
              <div className="text-sm text-stone-300 mt-1">
                Articles published
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-amber-400">
                50+
              </div>
              <div className="text-sm text-stone-300 mt-1">
                Destinations covered
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-amber-400">
                12K
              </div>
              <div className="text-sm text-stone-300 mt-1">Monthly readers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light text-amber-400">
                4
              </div>
              <div className="text-sm text-stone-300 mt-1">
                Continents explored
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.15em] text-amber-600/80 font-medium">
            Behind the scenes
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-2 tracking-tight">
            Meet the team
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto mt-2">
            A small crew of storytellers, photographers, and curious souls.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member 1 */}
          <div className="text-center group">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/desert3.webp"
                alt="Maya Chen"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mt-4">
              Maya Chen
            </h3>
            <p className="text-sm text-stone-500">Founder &amp; Editor</p>
          </div>
          {/* Team member 2 */}
          <div className="text-center group">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/article7.webp"
                alt="Liam O'Brien"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mt-4">
              Liam O&apos;Brien
            </h3>
            <p className="text-sm text-stone-500">Senior Writer</p>
          </div>
          {/* Team member 3 */}
          <div className="text-center group">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/article8.webp"
                alt="Sofia Rivera"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mt-4">
              Sofia Rivera
            </h3>
            <p className="text-sm text-stone-500">Photographer &amp; Visuals</p>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.15em] text-amber-600/80 font-medium">
              Our journey
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-2 tracking-tight">
              How we got here
            </h2>
          </div>
          <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-stone-200">
            {/* Item 1 */}
            <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 items-start">
              <div className="md:text-right md:pr-8">
                <span className="text-xs font-medium text-amber-600/80">
                  2020
                </span>
                <h3 className="text-lg font-medium text-stone-800">
                  First step
                </h3>
                <p className="text-sm text-stone-500">
                  Maya starts a personal travel journal during a solo trip to
                  Mexico.
                </p>
              </div>
              <div className="hidden md:block" />
            </div>
            {/* Item 2 */}
            <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 items-start">
              <div className="hidden md:block" />
              <div className="md:pl-8">
                <span className="text-xs font-medium text-amber-600/80">
                  2022
                </span>
                <h3 className="text-lg font-medium text-stone-800">
                  Going public
                </h3>
                <p className="text-sm text-stone-500">
                  The Roam Report launches as a blog — 50 stories in the first
                  year.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 items-start">
              <div className="md:text-right md:pr-8">
                <span className="text-xs font-medium text-amber-600/80">
                  2024
                </span>
                <h3 className="text-lg font-medium text-stone-800">
                  Growing community
                </h3>
                <p className="text-sm text-stone-500">
                  Reached 10K monthly readers; team grows to 4 contributors.
                </p>
              </div>
              <div className="hidden md:block" />
            </div>
            {/* Item 4 */}
            <div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 gap-8 items-start">
              <div className="hidden md:block" />
              <div className="md:pl-8">
                <span className="text-xs font-medium text-amber-600/80">
                  2025
                </span>
                <h3 className="text-lg font-medium text-stone-800">
                  New horizons
                </h3>
                <p className="text-sm text-stone-500">
                  Expanding into video, newsletters, and collaborative guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="bg-stone-800 text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight">
            Join the journey
          </h2>
          <p className="text-stone-300 max-w-md mx-auto mt-2 text-sm md:text-base">
            Subscribe to our newsletter and get stories, tips, and inspiration
            delivered straight to your inbox.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-stone-800 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium rounded-sm transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ===== BACK TO HOME ===== */}
      <div className="text-center pb-16">
        <Link
          href="/"
          className="inline-block text-sm text-stone-400 hover:text-stone-600 transition-colors duration-200 underline-offset-2 underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
