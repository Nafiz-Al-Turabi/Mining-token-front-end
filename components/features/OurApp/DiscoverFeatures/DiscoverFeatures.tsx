import React from "react";
import bgImage from "@/public/images/rewardsImages/bg-how.jpg";
import FeatureCard from "@/components/ui/Cards/FeatureCard";

const features = [
  {
    id: 1,
    title: "Cross-platform Compatibility",
    image: "/images/ourAppImages/Frame 2147227205 (5).svg",
    description: "The HEXminer app perfectly supports both Android and iOS devices, allowing you to manage your account anytime",
  },
  {
    id: 2,
    title: "Efficient Earnings Tracking",
    image: "/images/ourAppImages/Frame 2147227205 (6).svg",
    description: "rack your mining earnings in real-time, keeping a clear overview of your returns and ensuring you stayupdated on your investment performance.",
  },
  {
    id: 3,
    title: "Convenient Account Management",
    image: "/images/ourAppImages/Frame 2147227205 (7).svg",
    description: "Easily manage your account through the app, with intuitive features for deposits, withdrawals, plan purchase",
  },
  {
    id: 4,
    title: "24/7 Customer Support",
    image: "/images/ourAppImages/Frame 2147227205 (8).svg",
    description: "The HEXminer app includes integrated 24/7 customer service, ensuring you can always get timely assistance and support",
  }
];
const DiscoverFeatures = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(84.26% 32.38% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(194deg, rgba(0, 0, 0, 0.38) 40.13%, rgba(0, 0, 0, 0.00) 71.41%),url(${bgImage.src})`,
      }}
      className="bg-cover bg-top bg-no-repeat  pb-25"
    >
      <div className="max-w-[1320px] mx-auto px-4 2xl:px-0">
        <div>
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%] ">
            Discover{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              Powerful
            </span>{" "}
            Features
          </h1>
          <p className="text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
          Unleash the power of our platform with a multitude of powerful
          features, empowering you to achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 sm:mt-10  lg:mt-16">
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverFeatures;
