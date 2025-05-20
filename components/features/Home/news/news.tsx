import NewsCard from "@/components/ui/Cards/NewsCard";
import React from "react";

const news = () => {
  return (
    <div className="bg-[#000503] py-10 lg:py-0 relative xl:py-[60px]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div>
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%]">
            Latest{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              cloud mining {" "}
            </span>
            industry news
          </h1>
          <p className="text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
            HEXminer is your best choice for cryptocurrency investment
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="flex justify-center mt-10">
            <button className="btn btn-primary ">View All</button>
        </div>
      </div>
    </div>
  );
};

export default news;
