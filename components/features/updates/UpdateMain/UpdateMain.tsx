"use client";
import UpdatesCard from "@/components/ui/Cards/UpdatesCard";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); 
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
    className="absolute bottom-[-50px] right-[calc(50%-50px)] text-[#00E889] border border-[#00E889] hover:bg-[#00E889] hover:text-white p-2.5 rounded-full z-10 cursor-pointer"
  >
    <IoIosArrowForward className="text-base lg:text-3xl" />
  </button>
);

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute bottom-[-50px] left-[calc(50%-50px)] text-[#00E889] border border-[#00E889] hover:bg-[#00E889] hover:text-white p-2.5 rounded-full z-10 cursor-pointer"
  >
    <IoIosArrowBack className="text-base lg:text-3xl" />
  </button>
);

const UpdateMain = () => {
  const isMobile = useIsMobile();

  const cards = [
    <UpdatesCard key={1} />,
    <UpdatesCard key={2} />,
    <UpdatesCard key={3} />,
    <UpdatesCard key={4} />,
    <UpdatesCard key={5} />,
    <UpdatesCard key={6} />,
  ];

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
    <div className="py-20 lg:py-16 bg-[#000503]">
      <div className="max-w-[1320px] mx-auto px-4">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {cards.map((card, index) => (
              <div key={index} className="px-2">{card}</div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateMain;
