"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import noice from "@/public/noice.jpg";
import Link from "next/link";
import DepositModal from "../DepositModal/DepositModal";
import WithdrawModal from "../WithdrawModal/WithdrawModal";

const WalletCard = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="bg-cover bg-center text-white rounded-2xl p-6 w-full  shadow-xl relative overflow-hidden"
      >
        <div
          className={`h-[344px] w-[344px] bg-[#00E889] rounded-full absolute top-7 blur-[150px] opacity-[0.05]`}
        />
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-normal">Wallets</h2>
          <Link href="/dashboard/setting-wallet" className="flex items-center gap-1 px-3 py-1 bg-[#0B1B15] hover:bg-[#00e889]/20 rounded-full text-sm cursor-pointer duration-300 ease-in-out">
            Add Wallet <FaPlus className="ml-1 text-xs" />
          </Link>
        </div>

        {/* Balance Card */}
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
          }}
          className="flex flex-col justify-between h-[250px] bg-cover bg-center rounded-xl p-6 relative z-10 overflow-hidden border border-[#00E8890D]"
        >
          <div
            className={` h-[218px] w-[218px] bg-[#00E889] rounded-full absolute -top-27 -right-8 blur-[150px] opacity-[0.5]`}
          />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs md:text-base text-white">Current Balance</p>
              <h1 className="text-base md:text-2xl font-bold mt-1">$5,7000</h1>
            </div>
            <div className="text-right">
              <img src="/logo2.svg" alt="MiningToken" className="" />
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-sm md:text-lg text-white">Wallets</p>
              <p className="w-fit text-xs bg-gradient-to-l from-[#067549] to-[#00E889] text-transparent bg-clip-text font-semibold">
                For Hexminer
              </p>
            </div>

            <div className="flex gap-3 mt-4 text-xl text-gray-300">
              <img src="/coins.png" alt="coins" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-6 relative z-10">
          <button className="flex-1 btn btn-primary" onClick={() => setIsDepositModalOpen(true)}>
            Deposit
          </button>
          <button onClick={()=>setIsWithdrawModalOpen(true)} className="flex-1 py-2 border border-[#00e889] hover:bg-[#00e889]/20 rounded-full font-semibold shadow-md cursor-pointer duration-300 ease-in-out">
            Withdrawal
          </button>
        </div>
      </div>
      <DepositModal isOpen={isDepositModalOpen} onClose={() => setIsDepositModalOpen(false)} />
      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} />
    </div>
  );
};

export default WalletCard;
