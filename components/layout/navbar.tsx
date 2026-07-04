"use client";
import { navigationItems } from "@/constant/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 md:gap-8 py-2 px-4 md:px-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-lg shadow-black/5">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.href}
            key={item.id}
            className={`
              relative text-sm font-light tracking-wide transition-all duration-300
              ${isActive ? "text-amber-400" : "text-white/70 hover:text-white"}
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1.5px] 
              after:bg-amber-400 after:scale-x-0 after:origin-right 
              hover:after:scale-x-100 hover:after:origin-left
              after:transition-transform after:duration-300
              ${isActive ? "after:scale-x-100 after:origin-left" : ""}
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
