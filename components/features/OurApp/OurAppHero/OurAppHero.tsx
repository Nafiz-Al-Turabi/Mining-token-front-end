import React from "react";
import bgImage from "@/public/images/ourAppImages/bg-our-app.png";
import Image from "next/image";

const OurAppHero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[70vh] md:min-h-[70%] text-white"
      style={{ backgroundImage: `radial-gradient(84.26% 32.38% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(194deg, rgba(0, 0, 0, 0.38) 40.13%, rgba(0, 0, 0, 0.00) 71.41%),url(${bgImage.src})` }}
    >
      <div className="max-w-[1320px] mx-auto px-4 py-44 flex flex-col items-center md:items-start">
        <div className="max-w-[1320px] mx-auto px-4">
          <div>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-7xl font-bold text-center mb-4 leading-[120%] md:w-[20ch] mx-auto">
              Download the app for{" "}
              <span className="bg-gradient-to-l from-[#00E889] to-[#078854] bg-clip-text text-transparent">
                Android or iOS
              </span>
            </h1>
            <p className=" text-center text-lg lg:text-2xl font-medium tracking-[0.12px] md:w-[52ch] mx-auto bg-gradient-to-l from-[#ffffff] to-[#00ff99] bg-clip-text text-transparent">
              HEXminer: Driven by Innovation, Effortless Cloud Mining
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-6 lg:mt-12">
            <a href="https://appstoreconnect.apple.com/login" target="blank">
              <Image
                src="/images/app-store.svg"
                alt="apple-store"
                width={264}
                height={26}
                className="w-full"
              />
            </a>
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
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 lg:mt-12">
            <div className="flex -space-x-3 sm:-space-x-4 lg:-space-x-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/images/user.png"
                  alt="user-icon"
                  width={100}
                  height={100}
                  className="w-[2rem] h-[2rem] sm:w-10 sm:h-10 lg:w-16 lg:h-16 rounded-full border border-[#FFFFFF33]"
                />
              ))}
            </div>
            <p className="flex items-center gap-4 text-2xl font-bold lg:text-7xl">
              30K+ <span className="text-sm lg:text-2xl font-normal">Downloads</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAppHero;
