import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isReadyForAnimation, setIsReadyForAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReadyForAnimation(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHashLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[96%] max-w-screen-xl
        z-50 p-4 md:px-6 lg:px-8 rounded-lg
        text-white
        transition-all duration-500 ease-in-out
        ${isReadyForAnimation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        ${(isScrolling || isMenuOpen)
            ? "bg-gray-900/70 backdrop-blur-md shadow-lg"
            : "bg-gray-900/20 backdrop-blur-md shadow-md"
        }
        border border-slate-700/50
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleHashLinkClick('home'); }} className="flex items-center space-x-2 hover:scale-105 transform transition duration-300">
           <span className="text-xl md:text-2xl font-bold">Nelson Laurensius</span>
        </a>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-base font-semibold">
        <a href="#" onClick={(e) => { e.preventDefault(); handleHashLinkClick('home'); }} className="transition transform hover:scale-105 hover:text-blue-400">
              Home
            </a>
           <a href="#gallery" onClick={(e) => { e.preventDefault(); handleHashLinkClick('gallery'); }} className="transition transform hover:scale-105 hover:text-blue-400">
             Gallery
           </a>
           <a href="#counter" onClick={(e) => { e.preventDefault(); handleHashLinkClick('counter'); }} className="transition transform hover:scale-105 hover:text-blue-400">
             Counter
           </a>
            
        </div>

        <button className="md:hidden p-2 relative z-50" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0
                  bg-gray-900/90 backdrop-blur-md shadow-lg
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${isMenuOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0 py-0"}
                  z-40
                  `}
      >
        <ul className="flex flex-col items-center space-y-2">
          <li>
          <a href="#" onClick={(e) => { e.preventDefault(); handleHashLinkClick('home'); }} className="block w-full text-center text-white hover:text-blue-400 py-2 text-lg font-semibold transition transform hover:scale-105">
               home
             </a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); handleHashLinkClick('gallery'); }} className="block w-full text-center text-white hover:text-blue-400 py-2 text-lg font-semibold transition transform hover:scale-105">
              Gallery
            </a>
          </li>
          <li>
            <a href="#counter" onClick={(e) => { e.preventDefault(); handleHashLinkClick('counter'); }} className="block w-full text-center text-white hover:text-blue-400 py-2 text-lg font-semibold transition transform hover:scale-105">
              Counter
            </a>
          </li>
           <li>
             
           </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;