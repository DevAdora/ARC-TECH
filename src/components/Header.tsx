import { Link, useLocation } from "react-router-dom";
import ScrambleText from "./HeaderLinks";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Showcase", path: "/showcase" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.3);
    };

    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header - Only visible when NOT scrolled */}
      {!isScrolled && (
        <header className="absolute top-0 left-0 w-full z-30 px-8 py-4 font-onest">
          <div className="flex justify-between items-center text-white">
            {/* Logo */}
            <Link to="/">
              <h1 className="font-bold text-[2.8rem] cursor-pointer hover:opacity-80 transition">
                A
              </h1>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="font-onest hidden md:block">
              <ul className="flex space-x-6 text-[1.2rem]">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path}>
                      <ScrambleText label={item.name} variant="light" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA - Hidden on mobile */}
            <div className="hidden md:flex gap-4 font-sans">
              <Link to="/contact">
                <button className="uppercase bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 transition font-onest">
                  Get in Touch →
                </button>
              </Link>
            </div>
          </div>
        </header>
      )}

      {/* Top-right container - Visible when scrolled or on mobile */}
      <div className="fixed top-6 right-3 flex items-center space-x-4 z-50">
        <div
          className={`flex items-center space-x-4 transition-all duration-300 justify-center ${
            isScrolled || isMobile
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* Get in Touch Button */}
          <Link to="/contact">
            <button className="uppercase bg-[#080807] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition font-onest">
              Get in Touch →
            </button>
          </Link>

          {/* Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="bg-[#f2f0eb] text-black px-6 py-3 rounded-full text-sm sm:text-base font-medium tracking-wide hover:opacity-90 transition hover:scale-105"
            aria-label="Toggle menu"
          >
            MENU
          </button>
        </div>
      </div>

      {/* Side Menu Panel */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Side Menu Panel */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-[#080807] z-50 transform transition-all duration-700 ease-in-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col p-8 space-y-8 h-full">
            {/* Close button */}
            <div className="flex justify-between items-center">
              <p className="text-[1.6rem] text-[#f0ede4] font-onest">
                ARC-TECH © 2024
              </p>

              <button
                onClick={closeMobileMenu}
                className="w-20 h-20 flex items-center justify-center relative rounded-full transition-all duration-300 text-white text-[1.6rem]"
                aria-label="Close menu"
              >
                <ScrambleText label="Close" variant="light"></ScrambleText>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 flex-1 justify-center font-onest">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`text-[4rem] uppercase md:text-[3.5rem] text-[#f0ede4] transition-all duration-500 pb-1 ease-out leading-[40px] transform ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <ScrambleText label={item.name} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </>
    </>
  );
}
