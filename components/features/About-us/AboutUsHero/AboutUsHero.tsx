import React from "react";
import bgImage from "@/public/images/aboutUs/hero.jpg";
import { BiSolidBadgeDollar } from "react-icons/bi";
import {
  FaHandHoldingDollar,
  FaSackDollar,
  FaUserGroup,
} from "react-icons/fa6";

const AboutUsHero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `radial-gradient(84.26% 32.38% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(162deg, rgba(0, 0, 0, 0.38) 8.83%, rgba(0, 0, 0, 0.00) 52.13%),url(${bgImage.src})`,
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 lg:pt-60 pt-40 lg:pb-[156px] pb-[35px] flex flex-col items-center md:items-start">
        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold text-center mb-4 leading-[120%] md:w-[20ch] mx-auto">
          About Our{" "}
          <span className="bg-gradient-to-l from-[#00E889] to-[#078854] bg-clip-text text-transparent">
            Company
          </span>
        </h1>
        <p className="text-center text-lg lg:text-2xl font-medium tracking-[0.12px] md:w-[52ch] mx-auto">
          HEXminer: Driven by Innovation, Effortless Cloud Mining
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full relative md:mt-16 mt-12">
          <div className="">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex items-center gap-2 md:gap-4 p-2 xl:p-4 relative border-b border-[#00E889]/50">
              <div className="bgrad"></div>
              <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                <img src="/images/hero/users.svg" alt="expert-team" className="w-10 sm:w-full h-10 sm:h-full" />
              </div>
              <h3 className="text-xs lg:text-sm xl:text-xl font-bold">Expert Team</h3>
            </div>
          </div>
          <div className="">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex items-center gap-2 md:gap-4 p-2 xl:p-4 relative border-b border-[#00E889]/50">
              <div className="bgrad"></div>
              <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                <img src="/images/hero/dollar.svg" alt="expert-team" className="w-10 sm:w-full h-10 sm:h-full" />
              </div>
              <h3 className="text-xs lg:text-sm xl:text-xl font-bold">
                Automated Earning
              </h3>
            </div>
          </div>
          <div className="">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex items-center gap-2 md:gap-4 p-2 xl:p-4 relative border-b border-[#00E889]/50">
              <div className="bgrad"></div>
              <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                <img src="/images/hero/dollarhand.svg" alt="expert-team" className="w-10 sm:w-full h-10 sm:h-full" />
                
              </div>
              <h3 className="text-xs lg:text-sm xl:text-xl font-bold">EasyMining</h3>
            </div>
          </div>
          <div className="">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex items-center gap-2 md:gap-4 p-2 xl:p-4 relative border-b border-[#00E889]/50">
              <div className="bgrad"></div>
              <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                <img src="/images/hero/dollarbag.svg" alt="expert-team" className="w-10 sm:w-full h-10 sm:h-full" />
              </div>
              <h3 className="text-xs lg:text-sm xl:text-xl font-bold">
                100% Money Security
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
