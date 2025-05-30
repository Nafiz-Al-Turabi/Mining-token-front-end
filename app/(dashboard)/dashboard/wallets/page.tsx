import DepositLog from "@/components/features/UserDashboard/Wallets/DepositLog/DepositLog";
import WithdrawLog from "@/components/features/UserDashboard/Wallets/WithdrawLog/WithdrawLog";
import WalletMain from "@/components/features/UserDashboard/Wallets/WalletMain/WalletMain";
import React from "react";
import WalletsDataAndCard from "@/components/features/UserDashboard/Wallets/WalletsDataAndCard/WalletsDataAndCard";

export default function WalletsPage() {
  return (
    <div className="fade-in">
      <div className="hidden lg:block">
        <WalletMain />
      </div>
      <WalletsDataAndCard />
      <DepositLog />
      <WithdrawLog />
    </div>
  );
}
