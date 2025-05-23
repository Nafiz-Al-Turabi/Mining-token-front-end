import React from "react";
import heroImage from "@/public/images/plansImages/bg.jpg";

const PlansHero = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(84.26% 40.38% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(150deg, rgba(0, 0, 0, 0.38) 26.13%, rgba(0, 0, 0, 0.00) 80.99%), url(${heroImage.src})`,
      }}
      className="bg-cover bg-center min-h-[80vh] flex items-center justify-center from-[#000000] to-[#000000]"
    >
      <div className="max-w-[1320px] mx-auto px-4">
        <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] xl:text-7xl font-bold text-center mb-4 leading-[120%] md:w-[18ch] mx-auto">
          Select your{" "}
          <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
            mining plan
          </span>{" "}
          to start earning
        </h1>
        <p className="text-white text-center text-lg lg:text-2xl font-normal tracking-[0.12px] md:w-[52ch] mx-auto">
          Choose the mining plan that suits you and enjoy the benefits of stable
          returns and cutting-edge technology.
        </p>
      </div>
    </div>
  );
};

export default PlansHero;
