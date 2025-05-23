import React from "react";
import aboutcompanyimage from "@/public/images/homeImages/about-bg.jpg";

const AboutCompany = () => {
  return (
    <div className="bg-[#000503] pb-25">
      <div
        style={{
          backgroundImage: `url(${aboutcompanyimage.src})
              `,
        }}
        className="max-w-[1320px] mx-auto flex flex-col justify-between gap-16 bg-position-[center_left_16rem] bg-no-repeat  rounded-2xl p-16 pl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#05130d]/50"></div>
        <div className="h-[800px] w-[800px] bg-[#05130d] absolute -top-1/4 -left-10 rounded-full blur-[50px]"></div>
        <div>
          <h1 className="sm:w-[20ch]  text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white leading-[130%] relative z-10">
            About Our{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              Company
            </span>
          </h1>
          <p className="md:w-[40ch] text-transparent bg-gradient-to-r from-[#00E889] to-[#ffffff] bg-clip-text text-base lg:text-2xl font-bold tracking-[0.12px] mt-4 relative z-10">
            HEXminer: Exploring the Future, Pioneering a New Era in Cloud
            Mining.
          </p>
          <p className="text-base md:w-[65ch] text-white mt-4 relative z-10">
            Founded in 2020, HEXminer redefines traditional mining with an
            intelligent, transparent cloud platform. Based in London, we use
            cutting-edge technology and global resources to offer a low-cost,
          </p>
        </div>
        <button className="btn btn-primary w-50 relative z-10">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutCompany;
