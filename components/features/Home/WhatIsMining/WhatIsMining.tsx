import React from "react";
import image from "@/public/images/homeImages/authkit.svg";
import image2 from "@/public/images/homeImages/Frame 2147227099 (1).svg";
import image3 from "@/public/images/homeImages/Frame 2147227099 (2).svg";
import image4 from "@/public/images/homeImages/Frame 2147227099 (3).svg";
import image5 from "@/public/images/homeImages/Frame 2147227099 (4).svg";
import image6 from "@/public/images/homeImages/Frame 2147227099 (5).svg";
import "./WhatIsMining.css";

const miningFeatures = [
  {
    title: "AuthKit",
    image: image,
    description:
      "AuthKit is a platform that allows you to create and manage your own AI cloud mining.",
  },
  {
    title: "WorkOS",
    image: image2,
    description:
      "Advanced security ensures all your data and mining assets are protected with industry-grade encryption.",
  },
  {
    title: "User Management",
    image: image3,
    description:
      "Get predictive analytics and actionable insights to optimize your cloud mining operations.",
  },
  {
    title: "Your Application",
    image: image4,
    description:
      "Easily scale your mining setup to meet your computational needs without compromising performance.",
  },
  {
    title: "Your Database ",
    image: image5,
    description:
      "Track your mining progress in real-time with detailed analytics dashboards.",
  },
  {
    title: "Events API",
    image: image6,
    description:
      "Easily integrate with your existing tools and platforms for a unified workflow.",
  },
];

const WhatIsMining = () => {
  return (
    <div className="bg-[#000503] py-10 lg:py-0 relative">
        <img src="/images/homeImages/what is mining.svg" alt="" className="hidden md:block md:absolute -top-102 left-0" />
        <img src="/images/homeImages/what is mining2.svg" alt="" className="hidden md:block md:absolute -top-72 right-0" />
      <div className="max-w-[1320px] mx-auto px-4">
        <h1 className="text-2xl lg:text-[4rem] font-semibold text-white text-center mb-16">
          What is{" "}
          <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
            AI cloud
          </span>{" "}
          mining?
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-[#067549] rounded-2xl lg:border-none">
          {miningFeatures.map((feature, index) => (
            <div key={index} className="p-4 lg:p-0 lg:py-10 lg:px-6 relative">
              {index !== 1 && index !== 3 && index !== 5 && (
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#000503] via-[#00e889] to-[#000503] lg:hidden"></div>
              )}
              {index !== 2 && index !== 5 && (
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-[#000503] via-[#00e889] to-[#000503] hidden lg:block"></div>
              )}
              {index !== 4 && index !== 5 && (
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-[#000503] via-[#00e889] to-[#000503] lg:hidden"></div>
              )}
              {index !== 3 && index !== 4 && index !== 5 && (
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-[#000503] via-[#00e889] to-[#000503] hidden lg:block"></div>
              )}

              {/* Content */}
              <div className="flex justify-center items-center">
                <img
                  src={feature.image.src}
                  alt={feature.title}
                  className="hidden sm:block"
                />
              </div>
              <h3 className="text-base lg:text-[1.5rem] font-semibold text-left sm:text-center text-white tracking-[0.12px] mt-6 mb-3">
                {feature.title}
              </h3>
              <p className="text-[#E9E9EA] text-left sm:text-center text-sm lg:text-base font-normal tracking-[0.12px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsMining;
