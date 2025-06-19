import NewsCard from "@/components/ui/Cards/NewsCard";
import Link from "next/link";
import React from "react";

const NewsSection = () => {
  const news = [
    {
      title: "Latest cloud mining industry news",
      description: "HEXminer is your best choice for cryptocurrency investment",
    },
    {
      title: "Latest cloud mining industry news",
      description: "HEXminer is your best choice for cryptocurrency investment",
    },
    {
      title: "Latest cloud mining industry news",
      description: "HEXminer is your best choice for cryptocurrency investment",
    },
  ];
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 md:mt-16">
          {news.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-6 md:mt-10">
          <Link href="/news">
            <button className="btn btn-primary ">View All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
