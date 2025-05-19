"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import noice from "@/public/noice.jpg";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Plans",
    href: "/plans",
  },
  {
    label: "Rewards",
    href: "/rewards",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "App",
    href: "/app",
  },
  {
    label: "Updates",
    href: "/updates",
  },
  {
    label: "Guide",
    href: "/guide",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle resize events to determine if mobile view should be shown
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed  left-0 right-0 z-50 top-6 px-4  ">
      <div className="max-w-[1320px] mx-auto bg-[#ffffff0d] backdrop-blur-lg border border-[#424242] rounded-full flex justify-between items-center px-4 lg:px-6 py-3 lg:py-4 relative overflow-visible">
        <div className="h-[0.5px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute -top-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-[1px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>

        <Link href="/">
          <img src="/logo.svg" alt="logo" className="h-8 lg:h-auto" />
        </Link>
        <div className="hidden lg:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="xl:text-lg text-[#E9E9EA]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex gap-4">
          <button className="flex items-center gap-2 text-lg text-[#E9E9EA] cursor-pointer">
            <FaGlobe size={24} className="text-[#00e889]" /> English
          </button>
          <button className="btn btn-primary">Login</button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button className="btn py-1 px-2 sm:px-8 border border-[#00E889]/20 rounded-full cursor-pointer text-white text-lg">
            Login
          </button>
          <button className="flex items-center gap-2 text-lg text-[#E9E9EA] cursor-pointer">
            <FaGlobe size={24} className="text-[#fff]" />
          </button>
          <button
            className="menu-toggle text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex items-center justify-center w-10 h-10">
              <RiMenu3Line size={24} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 27, 16, 0.900), rgba(0, 22, 10, 0.900)), url(${noice.src})`,
        }}
        className={`bg-cover mobile-menu fixed top-0 right-0 bottom-0 w-[75%] max-w-[300px] bg-black z-50 transition-transform duration-300 ease-in-out transform lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-[#333333]">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <div className="flex items-center justify-center w-10 h-10">
              <IoClose size={24} />
            </div>
          </button>
        </div>

        <div className="p-6">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-base text-white hover:text-[#00e889] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
