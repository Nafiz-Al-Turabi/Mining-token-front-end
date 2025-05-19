import React from "react";
import backgroundImage from "@/public/images/homeImages/how-to-start-mining-bg.jpg";
import "./HowToStartMining.css";
import { BsArrowRight } from "react-icons/bs";
import noice from "@/public/noice.jpg";

const data = [
  {
    id: 1,
    title: "Sign Up for Free & Choose Your Plan",
    description:
      "Create a free account on HEXminer and explore the range of investment plans available. Select the one...",
  },
  {
    id: 2,
    title: "Sign Up for Free & Choose Your Plan",
    description:
      "Create a free account on HEXminer and explore the range of investment plans available. Select the one...",
  },
  {
    id: 3,
    title: "Sign Up for Free & Choose Your Plan",
    description:
      "Create a free account on HEXminer and explore the range of investment plans available. Select the one...",
  },
];

const HowToStartMining = () => {
  return (
    <div
      style={{ backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.911) 50%), url(${backgroundImage.src})` }}
      className=" bg-cover bg-center bg-no-repeat relative py-25"
    >
      <div className="max-w-[1320px] mx-auto px-4 2xl:px-0">
        <div>
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%] ">
            How to Start{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              Cloud Mining
            </span>{" "}
            in 3 Simple Steps
          </h1>
          <p className="text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
            Lear how to quickly start your cloud mining investment and begin
            eaming profits effortlessly
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-16">
          {data.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
              }}
              className={`bg-white/20 bg-cover bg-center bg-no-repeat backdrop-blur-3xl rounded-2xl p-4 relative overflow-hidden group ${index === 1 ? "border-b border-[#165a3e]" : ""}`}
            >
               {
                index === 1 ?  <div className="h-[1px] w-[70%] rounded-full bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-0 left-1/2 -translate-x-1/2 group-hover:w-[100%] transition-all duration-300"></div> :""
               }
              <div className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute ${index === 1 ? "-bottom-40 -right-40":"-top-40 -right-40"} blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}></div>
              <div className="w-[69px] h-[69px] bg-white/10 backdrop-blur-3xl border border-[#424242] rounded-full flex items-center justify-center relative overflow-hidden">
                <p className="h-14 w-14 bg-[#00E889] rounded-full absolute -bottom-10 blur-[20px] opacity-[0.1]"></p>
                <p className="text-[1.68rem] font-bold text-stroke">
                  0{index + 1}
                </p>
              </div>
              <div className="my-6">
                <h3 className="w-[20ch] text-lg lg:text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
              <button className="flex items-center gap-2 border border-[#00E889] rounded-full px-6 py-2 cursor-pointer hover:bg-[#00E889]/20 backdrop-blur-2xl hover:text-white transition-all duration-300">
                More <BsArrowRight className="w-4 h-4 -rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToStartMining;
