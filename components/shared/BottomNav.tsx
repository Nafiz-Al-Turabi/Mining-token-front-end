"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArtstation} from "react-icons/fa";
import noice from "@/public/noice.jpg";
import HomeIcon from "@/components/icons/HomeIcon";
import PlansIcon from "@/components/icons/PlansIcon";
import GuideIcon from "@/components/icons/GuideIcon";
import BonusIcon from "@/components/icons/BonusIcon";
import StatsIcon from "../icons/StatsIcon";
const NAV_ITEMS = [
  { href: "/", icon: <HomeIcon />, label: "Home" },
  { href: "/plans", icon: <PlansIcon />, label: "Plans" },
  { href: "/guide", icon: <GuideIcon />, label: "Guide" },
  { href: "/bonus", icon: <BonusIcon />, label: "Bonus" },
];

const BottomNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0E0E0E] px-4 pb-6 pt-4 rounded-t-[32px]">
      <div className="h-[1px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute bottom-3 left-1/2 -translate-x-1/2"></div>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="max-w-[1320px] mx-auto bg-[#ffffff0d] bg-cover bg-center bg-no-repeat backdrop-blur-lg border border-[#424242] rounded-full flex justify-between items-center px-4 lg:px-6 py-3 lg:py-4 relative overflow-hidden"
      >
        {/* Top Gradient Border */}
        <div className="h-[0.5px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        {/* Bottom Gradient Border */}
        <div className="h-[1px] w-[50%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#00E889] to-[#00E88900] absolute -bottom-0 left-1/2 -translate-x-1/2"></div>
        {/* Background Blurs */}
        <div className="h-[200px] w-[200px] bg-[#00E889] rounded-full absolute -top-10 -left-20 opacity-[0.1] blur-[50px] transition-all duration-300"></div>
        <div className="h-[200px] w-[200px] bg-[#00E889] rounded-full absolute -bottom-10 -right-20 opacity-[0.1] blur-[50px] transition-all duration-300"></div>

        <div className="flex justify-between items-center w-full relative z-10">
          {NAV_ITEMS.slice(0, 2).map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center text-[8px] font-semibold transition-colors duration-200 ${
                isActive(href) ? "text-[#00E889]" : "text-[#009658]"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}

          {/* Center Floating Icon */}
          <Link
            href="/artstation"
            className={`w-[40px] h-[40px] bg-white/10 backdrop-blur-3xl border border-[#424242] rounded-full flex items-center justify-center relative overflow-hidden ${
              isActive("/artstation") ? "border-[#00E889]" : ""
            }`}
          >
            <p className="h-14 w-14 bg-[#00E889] rounded-full absolute -bottom-10 blur-[20px] opacity-[0.1]"></p>
            <StatsIcon
              className={`${
                isActive("/artstation") ? "text-[#00E889]" : "text-[#009658]"
              }`}
            />
          </Link>

          {NAV_ITEMS.slice(2).map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center text-[8px] font-semibold transition-colors duration-200 ${
                isActive(href) ? "text-[#00E889]" : "text-[#009658]"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
