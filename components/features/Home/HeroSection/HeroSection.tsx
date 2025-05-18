"use client";
import heroImage from "@/public/images/hero/hero.png";
import Image from "next/image";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaHandHoldingDollar, FaSackDollar, FaUserGroup } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-col justify-center h-full px-4 2xl:px-0">
        <div className="flex relative mt-32">
          <div>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-7xl font-bold text-center lg:text-left mb-4 uppercase leading-[120%] lg:w-[20ch]">
              HEXMIN{" "}
              <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
                ERSTART
              </span>{" "}
              OF AI-POWERED
            </h1>
            <p className="text-[1.37rem] bg-gradient-to-l text-center lg:text-left  lg:w-[40ch] from-[#ffffff] to-[#00E889] bg-clip-text text-transparent tracking-widest ">
              Bitchon Cloud Mining With Hexminer
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-6 lg:mt-12">
              <a
                href="https://play.google.com/store/games?hl=en&pli=1"
                target="blank"
              >
                <Image
                  src="/images/google-play.svg"
                  alt="google-play"
                  width={264}
                  height={26}
                  className="w-full"
                />
              </a>
              <a href="https://appstoreconnect.apple.com/login" target="blank">
                <Image
                  src="/images/app-store.svg"
                  alt="apple-store"
                  width={264}
                  height={26}
                  className="w-full"
                />
              </a>
            </div>
            <div className="flex justify-center lg:justify-start mt-6 lg:mt-[70px] gap-4">
              <p className="text-[2rem] sm:text-5xl lg:text-7xl font-bold">320K+</p>
              <div>
                <div className="flex -space-x-3 sm:-space-x-4 lg:-space-x-5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      src="/images/user.png"
                      alt="user-icon"
                      width={100}
                      height={100}
                      className="w-[2rem] h-[2rem] sm:w-10 sm:h-10 lg:w-16 lg:h-16 rounded-full border border-[#FFFFFF33]"
                    />
                  ))}
                  <p className="w-[2rem] h-[2rem] sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-2xl bg-[#00E889] text-white rounded-full flex items-center justify-center">
                    +
                  </p>
                </div>
                <p className="text-sm lg:text-2xl mt-3">Registered Members</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-2 xl:block w-full relative">
            <div className="xl:absolute -bottom-6 left-0">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex flex-col justify-center gap-4 p-6 relative border-b border-[#00E889]/50">
                <div className="bgrad"></div>
                <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                  <img src="/images/hero/users.svg" alt="expert-team" />
                  <FaUserGroup
                    size={32}
                    className="text-[#00e889] relative z-10"
                  />
                </div>
                <h3 className="lg:text-sm xl:text-xl font-bold">Expert Team</h3>
              </div>
            </div>
            <div className="xl:absolute bottom-10 right-0">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex flex-col justify-center gap-4 p-6 relative border-b border-[#00E889]/50">
                <div className="bgrad"></div>
                <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                  <img src="/images/hero/dollar.svg" alt="expert-team" />
                  <BiSolidBadgeDollar
                    size={32}
                    className="text-[#00e889] relative z-10"
                  />
                </div>
                <h3 className="lg:text-sm xl:text-xl font-bold">Automated Earning</h3>
              </div>
            </div>
            <div className="xl:absolute top-0 right-0 2xl:-right-20">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex flex-col justify-center gap-4 p-6 relative border-b border-[#00E889]/50">
                <div className="bgrad"></div>
                <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                  <img src="/images/hero/dollarhand.svg" alt="expert-team" />
                  <FaHandHoldingDollar
                    size={32}
                    className="text-[#00e889] relative z-10"
                  />
                </div>
                <h3 className="lg:text-sm xl:text-xl font-bold">EasyMining</h3>
              </div>
            </div>
            <div className="xl:absolute -top-20 left-0 2xl:left-20">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl flex flex-col justify-center gap-4 p-6 relative border-b border-[#00E889]/50">
                <div className="bgrad"></div>
                <div className="overflow-hidden  w-[64px] h-[64px] rounded-b-lg flex items-center justify-center relative ">
                  <img src="/images/hero/dollarbag.svg" alt="expert-team" />
                  <FaSackDollar
                    size={32}
                    className="text-[#00e889] relative z-10"
                  />
                </div>
                <h3 className="lg:text-sm xl:text-xl font-bold">100% Money Security</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
