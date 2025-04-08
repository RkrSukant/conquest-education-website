"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Study In", path: "/study-in" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen || pathname !== "/" 
            ? "bg-white shadow-md backdrop-blur-sm bg-opacity-90"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`transition-all duration-300 ${
      isScrolled || isOpen || pathname !== "/" 
        ? "brightness-100"
        : "brightness-0 invert"
    }`}
  >
    <Image
      src="/main-logo.png"
      alt="Conquest Education Logo"
      width={400}
      height={100}
      className="h-16 w-auto"
      priority
    />
  </motion.div>
</Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-2 py-1 transition-all duration-300 ${
                  isScrolled || pathname !== "/"
                    ? pathname === item.path
                      ? "text-[#327fc6] font-semibold"
                      : "text-gray-700 hover:text-[#327fc6]"
                    : pathname === item.path
                    ? "text-white font-semibold"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-[#327fc6]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="ml-4 px-6 py-2 bg-[#327fc6] text-white rounded-lg hover:bg-[#285f94] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Free Consultation
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden z-50 relative"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className={`w-8 h-8 transition-all duration-300 ${
                isScrolled || isOpen || pathname !== "/"
                  ? "text-[#327fc6]"
                  : "text-white"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="h-full flex flex-col pt-24 px-6">
                <div className="flex-1 flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`text-xl px-4 py-2 rounded-lg transition-colors duration-300 ${
                        pathname === item.path
                          ? "bg-[#327fc6] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pb-10 pt-6">
                  <Link
                    href="/contact-us"
                    className="block w-full text-center px-6 py-3 bg-[#327fc6] text-white rounded-lg hover:bg-[#285f94] transition-colors duration-300 shadow-md"
                    onClick={toggleMenu}
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;