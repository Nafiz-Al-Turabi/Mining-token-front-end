"use client";

import BusinessCard from "@/components/ui/Cards/BusinessCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-70px] right-[calc(50%-50px)] lg:right-[calc(50%-60px)] text-[#00E889] border border-[#00E889] hover:bg-[#00E889] hover:text-white p-2.5 rounded-full z-10 cursor-pointer"
    >
      <IoIosArrowForward className="text-base  lg:text-3xl " />
    </button>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-70px] left-[calc(50%-50px)] lg:left-[calc(50%-60px)] text-[#00E889] border border-[#00E889] hover:bg-[#00E889] hover:text-white p-2.5 rounded-full z-10 cursor-pointer"
    >
      <IoIosArrowBack className="text-base  lg:text-3xl " />
    </button>
  );
};

const OurBusinessModel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-[#000503] py-0 lg:py-0 relative">
      <img src="/images/bgSvgs/our business1.svg" alt="" className="hidden md:block md:absolute -top-46 left-0 z-10" />
      <img src="/images/bgSvgs/our business2.svg" alt="" className="hidden md:block md:absolute -top-96 right-0 z-10" />
      <div className="max-w-[1320px] mx-auto pb-25 ">
        <div>
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%]">
            Our business{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              model
            </span>
          </h1>
          <p className="text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
            HHEXminer is your best choice for cryptocurrency investment
          </p>
        </div>

        <div className="relative mt-6 md:mt-16 ">
          <Slider {...settings}>
            <div className="px-3">
              <BusinessCard />
            </div>
            <div className="px-3">
              <BusinessCard />
            </div>
            <div className="px-3">
              <BusinessCard />
            </div>
            <div className="px-3">
              <BusinessCard />
            </div>
            <div className="px-3">
              <BusinessCard />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurBusinessModel;
