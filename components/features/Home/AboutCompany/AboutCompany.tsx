import React from "react";
import aboutcompanyimage from "@/public/images/homeImages/about-bg.jpg";
import Image from "next/image";

const AboutCompany = () => {
  return (
    <div className="bg-[#000503] pb-25 p-4">
      <div
        // style={{
        //   backgroundImage: `url(${aboutcompanyimage.src})
        //       `,
        // }}
        className="max-w-[1320px] h-[80vh] md:h-[60vh] lg:h-auto mx-auto flex flex-col lg:flex-row-reverse justify-between gap-16 bg-position-[center_left_16rem] bg-no-repeat  rounded-2xl lg:p-16 p-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#05130d]/50 z-20"></div>
        <div className="hidden lg:block h-[800px] w-[800px] bg-[#05130d] absolute -top-1/4 -left-10 rounded-full blur-[50px] z-20"></div>
        <div className="lg:hidden absolute h-[200px] w-[500px] md:w-full z-20 bg-[#05130d] -left-10 md:left-0 md:bottom-0 bottom-30 md:blur-2xl blur-xl"></div>
        <div>
          <Image src="/images/homeImages/about-bg.jpg" width={500} height={1000} alt="" className="absolute -top-50 left-8 md:left-0 md:-top-36 lg:top-0 lg:left-100 z-0 w-full h-full object-contain md:object-cover scale-[2.5] md:scale-100" />
        </div>
        <div>
          <div>
            <h1 className="sm:w-[20ch]  text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white leading-[130%] relative z-30">
              About Our{" "}
              <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
                Company
              </span>
            </h1>
            <p className="md:w-[40ch] text-transparent bg-gradient-to-r from-[#00E889] to-[#ffffff] bg-clip-text text-base lg:text-2xl font-bold tracking-[0.12px] mt-4 relative z-30">
              HEXminer: Exploring the Future, Pioneering a New Era in Cloud
              Mining.
            </p>
            <p className="text-sm md:text-base md:w-[65ch] text-white mt-4 relative z-30">
              Founded in 2020, HEXminer redefines traditional mining with an
              intelligent, transparent cloud platform. Based in London, we use
              cutting-edge technology and global resources to offer a low-cost,
            </p>
          </div>
          <button className="btn btn-primary w-50 relative z-30 mt-10">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
