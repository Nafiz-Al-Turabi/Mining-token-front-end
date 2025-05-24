import PlanCard from "@/components/ui/Cards/PlanCard";

const Plan = () => {
  return (
    <div className="bg-[#000503] pb-16  md:py-15 relative">
      <img src="/images/homeImages/plan-tech.svg" alt="" className="hidden md:block md:absolute -top-52 left-0" />
      <img src="/images/homeImages/plan-tech2.svg" alt="" className="hidden md:block md:absolute -top-102 right-0" />
      <div className="max-w-[1320px] mx-auto px-4 2xl:px-0">
        <div className="mb-6 md:mb-16">
          <h1 className="sm:w-[20ch] mx-auto text-2xl sm:text-[2.5rem] lg:text-[4rem] font-semibold text-white text-center leading-[130%]">
            Select your{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              mining plan
            </span>{" "}
            to start earning
          </h1>
          <p className="sm:w-[60ch] mx-auto text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
          Choose the mining contract that suits you best—smart contracts executed transparently with no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
          <PlanCard soldOut = {false} />
          <PlanCard soldOut = {true} />
          <PlanCard soldOut = {true} />
          <PlanCard soldOut = {false} />
          <PlanCard soldOut = {true} />
          <PlanCard soldOut = {false} />
          <PlanCard soldOut = {true} />
          <PlanCard soldOut = {false} />
          <PlanCard soldOut = {true} />
        </div>
      </div>
    </div>
  );
};

export default Plan;
