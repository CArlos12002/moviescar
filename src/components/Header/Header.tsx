"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/popular", label: "Popular" },
  { href: "/now-playing", label: "Now Playing" },
  { href: "/top-rated", label: "Top Rated" },
  { href: "/my-favourites", label: "My Favourites" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          🎬 Movies CAR
        </Link>

        <nav className="mt-3 md:mt-0 flex flex-wrap gap-4 md:gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-base font-medium transition-all duration-200 px-2 py-1 rounded-md",
                pathname === href
                  ? "bg-blue-100 text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-100"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
