import DWCard from "@/components/ui/Cards/DWCard";

const RecentDepositsWithdraws = () => {
  return (
    <div className="bg-[#000000] py-[60px]">
      <h1 className="text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%] mb-6">
        Recent {""}
        <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
          Deposits & Withdraws
        </span>
      </h1>
      <div className="max-w-[346px] mx-auto flex justify-center items-center gap-4 px-4 py-2.5 border border-[#00E889] rounded-full mb-6 sm:mb-16">
        <button className="btn btn-primary w-full">Deposit</button>
        <button className="btn-primary w-full border border-[#00E889]">
          Withdraw
        </button>
      </div>
      <div>
        <DWCard />
      </div>
    </div>
  );
};

export default RecentDepositsWithdraws;
