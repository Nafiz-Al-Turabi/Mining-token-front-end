"use client";
import React from "react";
import bgImage from "@/public/images/updatesImages/update-hero-bg.jpg";

const UpdatesHero = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(113.74% 43.72% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${bgImage.src})`,
      }}
      className="bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="max-w-[1320px] mx-auto px-4 py-44 flex flex-col items-center md:items-start">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center md:text-left leading-tight max-w-[18ch]">
          Changelog
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-2xl text-center md:text-left max-w-[52ch]">
          Keep track of the latest features and updates in Aurix.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 w-full max-w-md"
        >
          <div className="relative">
            <input
              type="email"
              required
              placeholder="Enter Your Mail"
              className="w-full bg-[#0E0E0E] px-6 py-3 rounded-full border border-[#00e889] placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 btn text-white font-medium px-6 py-2 rounded-full transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatesHero;
