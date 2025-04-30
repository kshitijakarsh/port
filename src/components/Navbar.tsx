import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import path from "path";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs"}
];

interface NavbarProps {
  show: boolean;
}

export default function Navbar({ show }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const isVisible = location.pathname !== "/" || scrolled || show;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 glass-effect ${
        isVisible ? 'py-2' : 'hidden'
      }`}
    >
      <div className="max-w-[700px] mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium text-orange-400">
          kshitij.
        </Link>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-xs transition-colors ${
                  location.pathname === link.path
                    ? 'text-black dark:text-white font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
