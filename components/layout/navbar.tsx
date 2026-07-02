import { navigationItems } from "@/constant/navigation";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-3 px-6 shadow-sm flex gap-8 rounded-full mt-6">
      {navigationItems.map((item) => (
        <Link href={item.href} key={item.id} className="hover:text-blue-500">
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
