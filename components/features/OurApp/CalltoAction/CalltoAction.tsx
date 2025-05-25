"use client";

import Image from "next/image";
import ctImage from "@/public/images/ourAppImages/13416094_5228737 1.svg";
import noice from "@/public/noice.jpg";

const CalltoAction = () => {
  return (
    <div className="bg-black px-4 py-10">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="max-w-[1320px] mx-auto px-4 sm:px-6 xl:pl-20 bg-cover bg-center bg-no-repeat rounded-3xl py-20 lg:py-0 relative overflow-hidden"
      >
        <div
        className={`h-[580px] w-[580px] bg-[#00E889] rounded-full absolute -top-40 -right-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
        <div
        className={`h-[580px] w-[580px] bg-[#00E889] rounded-full absolute -bottom-40 -left-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <Image src={ctImage} alt="bg-image" height={500} width={500} className="aspect-square" />
          <div>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-7xl font-bold  mb-4 leading-[120%]">
              Download the app for Android or IOS
            </h1>
            <p className=" text-base sm:text-lg">
              Seamlessly compatible with both Android and iOS, the HEXminer app
              offers a more convenient and faster experience.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 w-full max-w-md mx-auto lg:mx-0"
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
        </div>
      </div>
    </div>
  );
};
export default CalltoAction;
