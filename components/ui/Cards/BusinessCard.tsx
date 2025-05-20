"use client";

import Image from "next/image";
import businessImage from "@/public/images/homeImages/business.png";
import figmaIcon from "@/public/images/homeImages/figma.svg";
import noice from "@/public/noice.jpg";
import { FaArrowRight } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function BusinessCard() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }}
      className="bg-cover bg-center overflow-hidden  text-white shadow-lg rounded-2xl p-4 relative group border-b border-[#00e88744]"
    >
      <div
        className={`h-[300px] w-[300px] bg-[#00E889] rounded-full absolute -top-40 -right-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-4">
        <Image
          src={businessImage}
          alt="Automation Chip"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-base text-[#fafafa] leading-6 mb-4 ">
        Unlock the potential of automation, data synchronization, and improved
        experiences
      </p>
      <a
        href="https://figma.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full bg-[#0E0E0E] text-white p-4 rounded-2xl border border-[#00E889] hover:bg-[#0E0E0E]/80 transition duration-300"
      >
        <div className="flex items-center space-x-2">
          <Image src={figmaIcon} alt="Figma" width={64} height={64} />
          <span>Figma.com</span>
        </div>
        <IoArrowForwardOutline  size={32} className="-rotate-45" />
      </a>
    </div>
  );
}
