import React from "react";
import noice from "@/public/noice.jpg";
import frame from "@/public/images/ourAppImages/Frame 2147227205 (6).svg";

const FeatureCard = ({feature, index}: {feature: any, index: number}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #0E0E0E 81.09%, #010101 100%), url(${noice.src})`,
      }}
      className="bg-cover bg-center rounded-lg px-4 py-8 relative overflow-hidden group border border-[#06130de0] border-b-[#00E88744] hover:border-[#00E88744] duration-300"
    >
         <div
        className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute ${index === 1 ? "-bottom-[150px] -right-[201px]":"-top-[150px] -right-[201px]"} blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] group-hover:via-[#fff0] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
      <img src={feature.image} alt="frame" className="mb-6" />
      <div>
        <h1 className="text-lg sm:text-2xl font-semibold text-white mb-3">
          {feature.title}
        </h1>
        <p className="text-sm sm:text-base text-white/850">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
