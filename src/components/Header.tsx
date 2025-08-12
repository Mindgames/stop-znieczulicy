import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ease-out ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center transition-smooth hover-scale"
            >
              <div className="flex items-center">
                <img
                  src="/logo_sznu.svg"
                  alt="Stop Znieczulicy na Ulicy Logo"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className={`transition-all duration-500 ${
                    isScrolled ? "h-16 w-auto" : "h-20 w-auto"
                  }`}
                  style={{
                    height: isScrolled ? "6rem" : "7rem",
                    width: "auto",
                  }}
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-red-500 transition-all duration-300 whitespace-nowrap text-xs relative group`}
              >
                Strona główna
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/#mission"
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-red-500 transition-all duration-300 whitespace-nowrap text-xs relative group`}
              >
                O kampanii
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/#events"
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-red-500 transition-all duration-300 whitespace-nowrap text-xs relative group`}
              >
                Wydarzenia
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/#tips"
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-red-500 transition-all duration-300 whitespace-nowrap text-xs relative group`}
              >
                Jak reagować
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            <button
              className="md:hidden z-50 transition-smooth hover-scale"
              onClick={toggleMenu}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isOpen ? (
                <X
                  className={`${
                    isScrolled ? "text-gray-800" : "text-white"
                  } transition-all duration-300`}
                  size={24}
                />
              ) : (
                <Menu
                  className={`${
                    isScrolled ? "text-gray-800" : "text-white"
                  } transition-all duration-300`}
                  size={24}
                />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer div to prevent content from being hidden under the header */}
      <div
        className={`h-32 ${location.pathname === "/" ? "hidden" : "block"}`}
      ></div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center md:hidden z-40 animate-fade-in">
          <nav className="flex flex-col items-center space-y-6 text-sm">
            <Link
              to="/"
              className="text-white hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Strona główna
            </Link>
            <Link
              to="/#mission"
              className="text-white hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              O kampanii
            </Link>
            <Link
              to="/#events"
              className="text-white hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Wydarzenia
            </Link>
            <Link
              to="/#tips"
              className="text-white hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Jak reagować
            </Link>
            <Link
              to="/registration"
              className="bg-red-500 text-white px-4 py-2 rounded-full text-xs hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Dołącz
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
