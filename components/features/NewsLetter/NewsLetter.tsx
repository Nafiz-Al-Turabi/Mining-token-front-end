"use client";
import React from "react";
import noice from "@/public/noice.jpg";

export default function NewsLetter() {
  return (
    <div className="bg-[#000503] px-4 pb-[100px]">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="max-w-6xl mx-auto px-4 2xl:px-0 bg-cover bg-center relative overflow-hidden rounded-3xl"
      >
        <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
        <div
          className={`h-[580px] w-[580px] bg-[#00E889] rounded-full absolute -top-70 -right-70 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
        ></div>
        <div
          className={`h-[580px] w-[580px] bg-[#00E889] rounded-full absolute -bottom-70 -left-70 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
        ></div>
        <section className=" text-white rounded-[20px] py-20  md:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-[4rem] font-semibold leading-tight mb-4">
              Join HEXminer Today
            </h2>
            <p className="text-[#A0A0A0] text-base md:text-lg mb-10">
              Join HEXminer a And Get Your First Bitcoin Earnings
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 w-full max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Mail"
                  className="w-full bg-transparent px-6 py-3 rounded-full border border-[#00e889] placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn text-white font-medium px-6 py-2 rounded-full transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
