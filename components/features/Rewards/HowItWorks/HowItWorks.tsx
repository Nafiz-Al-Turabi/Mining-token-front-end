import React from "react";
import bgImage from "@/public/images/rewardsImages/bg-how.jpg";
import Line from "@/public/images/rewardsImages/Vector 117.svg";
import noice from "@/public/noice.jpg";

import "./HowItWorks.css";

const data = [
  {
    id: 1,
    title: "Shgn Up And Get A Reforal Minkc",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    title: "Lrwite Your Hrfends Usc Reforia! Inkc",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    title: "Roferraks buy packages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const HowItWorks = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(87.07% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%),url(${bgImage.src})`,
      }}
      className="bg-cover bg-top bg-no-repeat pb-25 px-4"
    >
      <div className="max-w-[1320px] mx-auto relative">
        <img src={Line.src} alt="" className="hidden xl:block absolute top-[27%] left-[6%]" />
        <img src={Line.src} alt="" className="hidden xl:block absolute bottom-[29%] right-[6%] scale-y-[-1] scale-x-[-1]" />
        <h1 className="sm:w-[20ch] text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white leading-[130%]">
          How{" "}
          <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
            does it
          </span>{" "}
          work?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-16">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
              }}
              className={`bg-white/20 xl:h-[250px] bg-cover bg-center bg-no-repeat backdrop-blur-3xl rounded-2xl p-4 relative overflow-hidden md:overflow-none xl:overflow-hidden group  flex flex-col justify-between ${
                index === 0 ? "xl:mt-40" : ""
              } ${index === 2 ? "xl:-mt-40" : ""}`}
            >
              <div
                className={`block md:hidden xl:block h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -bottom-[223px] left-1/2 -translate-x-1/2 blur-[100px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300 z-0`}
              ></div>
              <div>
                <div className="w-[69px] h-[69px] bg-white/10 backdrop-blur-3xl border border-[#424242] rounded-full flex items-center justify-center relative overflow-hidden">
                  <p className="h-14 w-14 bg-[#00E889] rounded-full absolute -bottom-10 blur-[20px] opacity-[0.1]"></p>
                  <p className="text-[1.68rem] font-bold text-stroke">
                    0{index + 1}
                  </p>
                </div>
                <div className="my-6">
                  <h3 className="xl:w-[20ch] text-lg lg:text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
