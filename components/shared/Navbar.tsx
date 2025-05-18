"use client";

import Link from "next/link";
import React from "react";
import { FaGlobe } from "react-icons/fa";

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
  return (
    <div className="fixed top-6 left-0 right-0 z-50 ">
      <div className="max-w-[1320px] mx-auto bg-[#ffffff0d] backdrop-blur-lg border border-[#424242]   rounded-full flex justify-between items-center px-6 py-4 relative overflow-visible">
        <div className="h-[0.5px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute -top-[1px] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-[1px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
        <Link href="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link href={item.href} className="text-lg text-[#E9E9EA]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-lg text-[#E9E9EA] cursor-pointer">
            <FaGlobe size={24} className="text-[#00e889]" /> English
          </button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
