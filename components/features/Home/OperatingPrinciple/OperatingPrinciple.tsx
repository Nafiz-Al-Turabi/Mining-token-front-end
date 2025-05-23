"use client";
import React, { useEffect, useState } from "react";
import noice from "@/public/noice.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Hook: Detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// Custom Arrows
const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute bottom-[-60px] right-[calc(50%-50px)] text-[#00E889] border border-[#00E889] hover:bg-[#00E889] hover:text-white p-2.5 rounded-full z-10 cursor-pointer"
  >
    <IoIosArrowForward className="text-base lg:text-3xl" />
  </button>
);

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute bottom-[-60px] left-[calc(50%-50px)] text-[#00E889] border border-[#00E889] hover:bg-[#00E889] hover:text-white p-2.5 rounded-full z-10 cursor-pointer"
  >
    <IoIosArrowBack className="text-base lg:text-3xl" />
  </button>
);

// Data
const operatingPrincipleData = [
  {
    title: "Earnings & Principal Return",
    description:
      "Customers can choose to withdraw daily earnings or reinvest. Upon contract maturity, the principal is returned, with the option to withdraw or renew the contract.",
    image: "/images/homeImages/operating.svg",
  },
  {
    title: "Smart Contract Allocation",
    description:
      "Funds are allocated to cloud mining operations and digital financial ecosystem to ensure efficient utilization and optimized returns.",
    image: "/images/homeImages/operating2.svg",
  },
  {
    title: "Cloud Mining Starts",
    description:
      "AI-powered algorithm optimizes hash rate allocation, enhances mining efficiency, and reduces power consumption for stable operations.",
    image: "/images/homeImages/operating3.svg",
  },
  {
    title: "Profit Distribution",
    description:
      "Of the total revenue, 87% is allocated to customer earnings, while 13% is allocated to the platform.",
    image: "/images/homeImages/operating4.svg",
  },
  {
    title: "Purchase Mining Contract",
    description: "The customer selects a mining plan and invests funds.",
    image: "/images/homeImages/operating5.svg",
  },
];

// Card Component
const Card = ({ item }: { item: any }) => (
  <div
    className="bg-[#010101f3] flex flex-col h-[300px] lg:h-full justify-between rounded-[18px] px-6 pt-8 lg:py-8 bg-cover bg-center relative overflow-hidden group border-b border-[#00e88744]"
    style={{
      backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
    }}
  >
    {/* Glow Effects */}
    <div className="h-[300px] w-[300px] bg-[#00E889] rounded-full absolute -bottom-50 -left-50 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300" />
    <div className="h-[300px] w-[300px] bg-[#00E889] rounded-full absolute -top-50 -right-50 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300" />

    {/* Gradient Border */}
    <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2" />

    {/* Content */}
    <div>
      <img
        src={item.image}
        alt={item.title}
        className="mb-[32px] max-h-[100px] h-12 w-12 lg:h-20 lg:w-20"
      />
      <h3 className="text-lg sm:text-[1.5rem] mb-2 text-white">{item.title}</h3>
      <p className="text-sm lg:text-base text-[#e2e2e2]">{item.description}</p>
    </div>
  </div>
);

// Main Component
const OperatingPrinciple = () => {
  const isMobile = useIsMobile();

  const sliderSettings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="bg-[#000503] relative ">
      {/* Background SVGs */}
      <img
        src="/images/bgSvgs/Operating1.svg"
        alt=""
        className="hidden md:block md:absolute -top-46 left-0 z-10"
      />
      <img
        src="/images/bgSvgs/Operating2.svg"
        alt=""
        className="hidden md:block md:absolute -top-230 right-0"
      />

      <div className="max-w-[1320px] mx-auto pb-25 px-4">
        <div className="text-center">
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white leading-[130%]">
            Operating{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              Principle
            </span>
          </h1>
          <p className="text-white text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
            HEXminer is your best choice for cryptocurrency investment
          </p>
        </div>

        {/* Responsive Layout */}
        {isMobile ? (
          <Slider {...sliderSettings} className="mt-6 md:mt-16">
            {operatingPrincipleData.map((item, index) => (
              <div key={index} className="px-2">
                <Card item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-6 md:mt-16">
            {operatingPrincipleData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`sm:col-span-6 ${
                    index === 3 || index === 4
                      ? "lg:col-span-6"
                      : "lg:col-span-4"
                  }`}
                >
                  <Card item={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OperatingPrinciple;
