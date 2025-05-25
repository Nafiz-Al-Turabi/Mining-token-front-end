import UpdatesCard from "@/components/ui/Cards/UpdatesCard";
import React from "react";

const UpdateMain = () => {
  return (
    <div className="py-16 bg-[#000503]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UpdatesCard />
          <UpdatesCard />
          <UpdatesCard />
          <UpdatesCard />
        </div>
      </div>
    </div>
  );
};

export default UpdateMain;
