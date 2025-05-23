import PlanCard from "@/components/ui/Cards/PlanCard";
import React from "react";

const Plans = () => {
  return (
    <div className="bg-[#000503] pt-[60px] pb-[100px] relative">
      <img src="/images/plansImages/bg-wire.svg" alt="" className="hidden md:block md:absolute -top-28 right-0" />
      <img src="/images/plansImages/bg-wire2.svg" alt="" className="hidden md:block md:absolute -top-28 left-0" />
      <img src="/images/plansImages/bg-wire3.svg" alt="" className="hidden md:block md:absolute -bottom-28 left-0" />
      <img src="/images/plansImages/bg-wire4.svg" alt="" className="hidden md:block md:absolute -bottom-80 right-0" />
      <div className="max-w-[1320px] mx-auto px-4 2xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
          <PlanCard soldOut={false} />
          <PlanCard soldOut={true} />
          <PlanCard soldOut={true} />
          <PlanCard soldOut={false} />
          <PlanCard soldOut={true} />
          <PlanCard soldOut={false} />
          <PlanCard soldOut={true} />
          <PlanCard soldOut={false} />
          <PlanCard soldOut={true} />
        </div>
      </div>
    </div>
  );
};

export default Plans;
