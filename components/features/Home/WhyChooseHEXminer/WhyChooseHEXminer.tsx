import React from "react";

const WhyChooseHEXminer = () => {
  return (
    <div className="bg-[#000503] py-[40px]">
      <div className="text-center">
        <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white leading-[130%]">
          Why Choose{" "}
          <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
            HEXminer?
          </span>
        </h1>
        <p className="text-white text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
          HEXminer is your best choice for cryptocurrency investment
        </p>
      </div>
      <div className="xl:-mt-32 2xl:-mt-40 relative z-20">
        <img
          src="/why-choose.svg"
          alt="why choose hex miner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhyChooseHEXminer;
