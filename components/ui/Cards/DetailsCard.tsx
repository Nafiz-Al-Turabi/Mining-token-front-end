"use client";
import React, { useState } from "react";
import { DollarSign, Minus, Plus } from "lucide-react";
import Check from "@/components/icons/Check";
import noice from "@/public/noice.jpg";

const DetailsCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isInvesting, setIsInvesting] = useState(false);

  const handleQuantityChange = (action: any) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleInvest = () => {
    setIsInvesting(true);
    // Simulate investment process
    setTimeout(() => {
      setIsInvesting(false);
      alert(`Successfully invested in ${quantity} contract(s)!`);
    }, 2000);
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="bg-cover bg-center bg-no-repeat rounded-3xl p-4 md:p-8 lg:p-16 text-white relative overflow-hidden mt-32 mb-10 "
      >
        <div
        className={`h-[1238px] w-[1238px] bg-[#00E889] rounded-full absolute -top-[619px] -right-[619px] blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300 z-0`}
      ></div>
        <div
        className={`h-[1238px] w-[1238px] bg-[#00E889] rounded-full absolute -bottom-[619px] -left-[619px] blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300 z-0`}
      ></div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
              <DollarSign className="w-8 h-8 bg-green-700 p-1 rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Wind-126TH【Flash Sale】
              </h1>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl sm:text-4xl lg:text-[4rem] font-bold flex items-center gap-2">
              <span className="text-white text-3xl">$</span>
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
            3,800.00
            </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
          {/* Row 1 */}
          <div className="flex items-center justify-between p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-tl from-[#1c4937] to-[#1a7751] rounded-full flex items-center justify-center">
                <Check />
              </div>
              <span className="text-gray-300 font-medium">Daily Rewards</span>
            </div>
            <span className="text-white font-bold text-sm md:text-lg">$ 640.00</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-tl from-[#1c4937] to-[#1a7751] rounded-full flex items-center justify-center">
                <Check />
              </div>
              <span className="text-gray-300 font-medium">Total Earnings</span>
            </div>
            <span className="text-white font-bold text-sm md:text-lg">$ 1,280.00</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-tl from-[#1c4937] to-[#1a7751] rounded-full flex items-center justify-center">
                <Check />
              </div>
              <span className="text-gray-300 font-medium">Matured Amount</span>
            </div>
            <span className="text-white font-bold text-sm md:text-lg">
              $ 8,000.00 + $ 1,280.00
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-tl from-[#1c4937] to-[#1a7751] rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-300 font-medium">
                Contract Duration
              </span>
            </div>
            <span className="text-white font-bold text-sm md:text-lg">2 Day</span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-tl from-[#1c4937] to-[#1a7751] rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-300 font-medium">
                Principal Refund
              </span>
            </div>
            <span className="text-emerald-400 font-bold text-sm md:text-lg">Yes</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-tl from-[#1c4937] to-[#1a7751] rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-300 font-medium">Payout Cycle</span>
            </div>
            <span className="text-white font-bold text-sm md:text-lg">24 hours</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 p-4 bg-[#0E0E0E80] rounded-xl border border-[#373737] relative z-10">
          <p className="text-gray-300 text-center text-sm md:text-lg leading-relaxed">
            Please review the following content before placing an order. We want
            to ensure that you fully understand your rights and obligations when
            using the HEXminer cloud mining platform.
          </p>
        </div>

        {/* Action Section */}
        <div className="flex  items-center gap-4 relative z-10">
          {/* Quantity Selector */}
          <div className="w-1/2 md:w-[250px] flex items-center justify-between gap-4 bg-[#0E0E0E80] rounded-xl p-0.5 md:p-2 border border-[#373737]">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="w-12 h-12  hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={quantity <= 1}
            >
              <Minus size={32} className="text-[#00e889]" />
            </button>

            <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
              {quantity.toString().padStart(2, "0")}
            </span>

            <button
              onClick={() => handleQuantityChange("increment")}
              className="w-12 h-12  hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <Plus size={32} className="text-[#00e889]" />
            </button>
          </div>

          {/* Invest Button */}
          <button
            onClick={handleInvest}
            disabled={isInvesting}
            className="flex-1 btn disabled:to-emerald-600/50 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-emerald-500/25"
          >
            {isInvesting ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>PROCESSING...</span>
              </div>
            ) : (
              <span className="text-sm md:text-lg tracking-wide">INVEST NOW</span>
            )}
          </button>
        </div>

        {/* Total Investment Display */}
        {quantity > 1 && (
          <div className="mt-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
            <div className="flex justify-between items-center">
              <span className="text-emerald-300 font-medium">
                Total Investment:
              </span>
              <span className="text-2xl font-bold text-emerald-400">
                $ {(3800 * quantity).toLocaleString()}.00
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-emerald-300 font-medium">
                Expected Daily Returns:
              </span>
              <span className="text-xl font-bold text-emerald-400">
                $ {(640 * quantity).toLocaleString()}.00
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
