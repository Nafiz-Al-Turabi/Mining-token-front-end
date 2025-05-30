import React from "react";
import WalletChart from "../WalletChart/WalletChart";
import WalletCard from "../WalletCard/WalletCard";

const WalletsDataAndCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
      <div className="col-span-12 xl:col-span-5">
        <WalletCard />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <WalletChart />
      </div>
    </div>
  );
};

export default WalletsDataAndCard;
