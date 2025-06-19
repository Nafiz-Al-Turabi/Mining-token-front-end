"use client";
import NewsCard from "@/components/ui/Cards/NewsCard";
import React, { useEffect, useState } from "react";

const AllNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsData();
  }, []);

  const newsData = async () => {
    try {
      const response = await fetch("/news.json");
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#000503] py-10 lg:py-0 relative xl:py-[60px]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="mt-20">
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%]">
            Latest{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              cloud mining{" "}
            </span>
            industry news
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 md:mt-16">
          {news?.map((item: any) => (
            <NewsCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
