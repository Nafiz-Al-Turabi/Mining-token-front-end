import Image from "next/image";
import React from "react";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";
import noice from "@/public/noice.jpg";

const WalletMain = () => {
  const WalletData = [
    {
      id: 1,
      title: "Trial funds",
      amount: 0.0,
      icon: "/images/dashboardImages/frame.svg",
    },
    {
      id: 2,
      title: "Deposit",
      amount: 2201.99,
      percentage: 25,
      icon: "/images/dashboardImages/frame2.svg",
    },
    {
      id: 3,
      title: "Withdraw money",
      amount: 300.01,
      percentage: 25,
      growth: true,
      icon: "/images/dashboardImages/frame3.svg",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {WalletData.map((wallet, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(181deg, #0E0E0E 1.97%, #010101 99.17%), url(${noice.src})`,
          }}
          className="bg-cover bg-center overflow-hidden text-white shadow-lg rounded-2xl p-4 relative group border border-[#00e88744]"
        >
          <div className="h-[200px] w-[200px] bg-[#00E889] rounded-full absolute -bottom-[127px] right-1/2 translate-x-1/2 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300" />
          <div className="flex items-center justify-between">
            <Image
              src={wallet.icon}
              alt="frame"
              height={40}
              width={40}
              className="w-6 h-6 sm:h-10 sm:w-10"
            />
          </div>
          <h2 className="text-base md:text-[1.75rem] flex items-center gap-2 font-bold mt-3 mb-1">
            <span className="text-sm font-normal">$</span>
            {wallet.amount}
          </h2>
          <div className="text-xs md:text-base flex items-center justify-between">
            <p>{wallet.title}</p>
            {wallet.percentage && (
              <p
                className={`flex items-center gap-1 text-xs p-1 rounded-full ${
                  wallet.growth
                    ? "text-[#00E889] bg-[#00E889]/20"
                    : "text-red-600 bg-red-600/20"
                }`}
              >
                {wallet.growth ? (
                  <IoTrendingUp className="text-base sm:text-xl" />
                ) : (
                  <IoTrendingDown className="text-red-600  text-base sm:text-xl" />
                )}
                {wallet.percentage}%
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletMain;
