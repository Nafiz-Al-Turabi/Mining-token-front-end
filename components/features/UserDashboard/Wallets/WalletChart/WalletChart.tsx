import React from "react";
import noice from "@/public/noice.jpg";
const WalletChart = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }}
      className="bg-cover bg-center rounded-2xl p-6 relative z-10 overflow-hidden"
    >
      <div
        className={`h-[344px] w-[344px] bg-[#00E889] rounded-full absolute top-0 blur-[150px] opacity-[0.05]`}
      />
      <div
        className={`h-[344px] w-[344px] bg-[#00E889] rounded-full absolute bottom-0 right-0 blur-[150px] opacity-[0.05]`}
      />
      <div className="relative z-10">
        Will Add Chart Here
     </div>
    </div>
  );
};

export default WalletChart;
