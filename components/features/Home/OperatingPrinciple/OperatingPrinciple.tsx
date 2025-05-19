import noice from "@/public/noice.jpg";

const OperatingPrinciple = () => {
  const operatingPrinciple = [
    {
      title: "Earnings & Principal Return",
      description:
        "Customers can choose to withdraw daily earnings or reinvest. Upon contract maturity, the principal is returned, with the option to withdraw or renew the contract.",
      image: "/images/homeImages/operating.svg",
    },
    {
      title: "Smart Contract Allocation",
      description:
        "Funds are allocated to cloud mining operations and digital financial ecosystem to ensure efficient utilization and optimized returns.",
      image: "/images/homeImages/operating2.svg",
    },
    {
      title: "Cloud Mining Starts",
      description:
        "AI-powered algorithm optimizes hash rate allocation, enhances mining efficiency, and reduces power consumption for stable operations.",
      image: "/images/homeImages/operating3.svg",
    },
    {
      title: "Profit Distribution",
      description:
        "Of the total revenue, 87% is allocated to customer earnings, while 13% is allocated to the platform.",
      image: "/images/homeImages/operating4.svg",
    },
    {
      title: "Purchase Mining Contract",
      description: "The customer selects a mining plan and invests funds.",
      image: "/images/homeImages/operating5.svg",
    },
  ];
  return (
    <div className="bg-[#000503] py-10 lg:py-0 relative ">
      <div className="max-w-[1320px] mx-auto pb-25">
        <div>
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%] ">
            Operating{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              Principle
            </span>{" "}
          </h1>
          <p className="text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
            HEXminer is your best choice for cryptocurrency investment
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {operatingPrinciple.map((item, index) => (
            <div
              style={{
                backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
              }}
              className="bg-[#010101f3] rounded-[18px] p-6 bg-cover bg-center relative overflow-hidden group border-b border-[#00e88744]"
            >
              <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
              <img
                src={item.image}
                alt=""
                className="mb-[72px]"
              />
              <div>
                <h3 className="text-lg sm:text-[1.5rem] mb-4">{item.title}</h3>
                <p className="text-base text-[#e2e2e2]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatingPrinciple;
