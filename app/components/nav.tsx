import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";





const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
<nav className="lg:mb-16 mb-12 py-5">
  <div className="container mx-auto px-4 py-2 bg-white dark:bg-neutral-900 shadow-lg rounded-full border border-neutral-300 dark:border-neutral-700">
    {/* Flex container to center items both vertically and horizontally */}
    <div className="flex flex-col md:flex-row md:items-center justify-center items-center">
      {/* Links container */}
      <div className="flex items-center gap-4 justify-center">
        {/* Home Link */}
        <Link href="/" className="relative flex items-center space-x-2 transition-all
                          hover:scale-110
                          hover:text-white dark:hover:text-neutral-200
                          px-3 py-2 m-1
                          rounded-lg hover:shadow-2xl cursor-pointer">
          Home
        </Link>

        {/* Map through navItems to create additional links */}
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="relative flex items-center space-x-2 transition-all
                          hover:scale-110
                          hover:text-white dark:hover:text-neutral-200
                          px-3 py-2 m-1
                          rounded-lg hover:shadow-2xl cursor-pointer"
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Theme switch, positioned to the right */}
      <div className="mt-6 md:mt-0 md:ml-auto">
        <ThemeSwitch />
      </div>
    </div>
  </div>
</nav>



  );
}
