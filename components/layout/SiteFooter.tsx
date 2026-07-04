import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="relative bg-stone-900 text-stone-300 py-12 md:py-16 px-6 md:px-10 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Brand */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            The Roam Report
          </h2>
          <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
            Less rush. <br className="sm:hidden" /> More wonder.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 text-sm">
          <h3 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Explore
          </h3>

          <Link
            href="/"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/articles"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            Articles
          </Link>

          <Link
            href="/about"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            href="#"
            className="hover:text-amber-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Social & Copyright */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Follow
          </h3>

          <div className="flex gap-4">
            <Link
              href="https://x.com"
              aria-label="Twitter"
              className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* SVG */}
            </Link>

            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* SVG */}
            </Link>

            <Link
              href="https://youtube.com"
              aria-label="YouTube"
              className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* SVG */}
            </Link>
          </div>

          <p className="text-xs text-stone-500 border-t border-stone-800 pt-4">
            &copy; {new Date().getFullYear()} The Roam Report. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
