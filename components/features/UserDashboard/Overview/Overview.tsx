"use client";
import noice from "@/public/noice.jpg";
import Image from "next/image";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

const Overview = () => {
  const OverviewData = [
    {
      id: 1,
      title: "Available Balance",
      amount: 25315.0,
      percentage: 12.5,
      icon: "/images/dashboardImages/frame.svg",
      chart: "/images/dashboardImages/static-chart.svg",
    },
    {
      id: 2,
      title: "Trial Fund",
      amount: 25315.0,
      percentage: 25,
      icon: "/images/dashboardImages/frame2.svg",
      chart: "/images/dashboardImages/static-chart2.svg",
    },
    {
      id: 3,
      title: "Total Deposit",
      amount: 50000.0,
      percentage: 25,
      growth: true,
      icon: "/images/dashboardImages/frame3.svg",
      chart: "/images/dashboardImages/static-chart3.svg",
    },
    {
      id: 4,
      title: "Total Withdraw",
      amount: 6200.0,
      percentage: 20,
      growth: false,
      icon: "/images/dashboardImages/frame10.svg",
      chart: "/images/dashboardImages/static-chart4.svg",
    },
    {
      id: 5,
      title: "Today Profits",
      amount: 15422.0,
      percentage: 35,
      growth: true,
      icon: "/images/dashboardImages/frame4.svg",
      chart: "/images/dashboardImages/static-chart5.svg",
    },
    {
      id: 6,
      title: "Today Bonus",
      amount: 454,
      percentage: 5,
      growth: false,
      icon: "/images/dashboardImages/frame5.svg",
      chart: "/images/dashboardImages/static-chart6.svg",
    },
    {
      id: 7,
      title: "Total Referrals",
      amount: 120,
      percentage: 3,
      growth: true,
      icon: "/images/dashboardImages/frame6.svg",
      chart: "/images/dashboardImages/static-chart7.svg",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {OverviewData.map((Overview, index) => (
        <div
          style={{
            backgroundImage: `linear-gradient(181deg, #0E0E0E 1.97%, #010101 99.17%), url(${noice.src})`,
          }}
          className="bg-cover bg-center overflow-hidden text-white shadow-lg rounded-2xl p-4 relative group border border-[#00e88744]"
        >
          <div className="h-[200px] w-[200px] bg-[#00E889] rounded-full absolute -bottom-[127px] right-1/2 translate-x-1/2 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300" />
          <div className="flex items-center justify-between">
            <Image src={Overview.icon} alt="frame" height={40} width={40} />
            <Image
              src={Overview.chart}
              alt="static-chart"
              height={24}
              width={60}
            />
          </div>
          <h2 className="text-lg md:text-[1.75rem] flex items-center gap-2 font-bold mt-3 mb-1">
            <span className="text-sm font-normal">$</span>
            {Overview.amount}
          </h2>
          <div className="text-xs md:text-base flex items-center justify-between">
            <p>{Overview.title}</p>
            <p
              className={`flex items-center gap-1 text-xs ${
                Overview.growth ? "text-[#00E889]" : "text-red-600"
              }`}
            >
              {Overview.growth ? (
                <IoTrendingUp size={20} />
              ) : (
                <IoTrendingDown className="text-red-600" size={20} />
              )}
              {Overview.percentage}%
            </p>
          </div>
        </div>
      ))}
      <button
        style={{
          backgroundImage: `linear-gradient(181deg, #0E0E0E 1.97%, #010101 99.17%), url(${noice.src})`,
        }}
        className="border border-[#00e88744] rounded-2xl p-4 bg-cover bg-center overflow-hidden relative cursor-pointer group"
      >
        <div className="h-[120px] w-[120px] absolute top-0 left-0 bg-[#00E889] opacity-[0.3] blur-[100px] group-hover:opacity-[0.2] transition-all duration-300" />
        <div className="h-[120px] w-[120px] absolute bottom-0 right-0 bg-[#00E889] opacity-[0.3] blur-[100px] group-hover:opacity-[0.2] transition-all duration-300" />
        <div className="flex justify-center relative z-10">
          <img src="/images/dashboardImages/frame7.svg" alt="" />
        </div>
        <div className="flex justify-center mt-3 relative z-10">
          <p className="text-xl font-normal bg-gradient-to-r from-[#00E889] to-[#004e2f] text-transparent bg-clip-text w-fit">
            Add Data
          </p>
        </div>
      </button>
    </div>
  );
};

export default Overview;
