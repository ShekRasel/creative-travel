
const SiteFooter = () => {
  return (
    <footer className="bg-[#e7e5e4] py-16 md:py-20 px-4 md:px-8 text-[#1c1c1a] z-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
          End of the trail
        </h2>

        {/* Sub-text */}
        <p className="text-xl md:text-2xl text-[#4a4a46] italic mt-2">
          Less rush. <br className="sm:hidden" /> More wonder.
        </p>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-8 text-sm md:text-base font-medium text-[#4a4a46]">
          <a
            href="#"
            className="hover:text-[#1c1c1a] transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#1c1c1a] transition-colors duration-200"
          >
            Articles
          </a>
          <a
            href="#"
            className="hover:text-[#1c1c1a] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#1c1c1a] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Social / Action Icons */}

        {/* Copyright */}
        <p className="text-sm text-[#6b6b67] mt-8 border-t border-[#d0cec8] pt-8 max-w-xs mx-auto">
          Copyright ©2025 · The Roam Report
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
