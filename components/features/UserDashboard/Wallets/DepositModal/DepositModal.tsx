"use client";
import React, { useEffect, useState } from "react";
import noice from "@/public/noice.jpg";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setShow(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300 px-4 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className={`transform transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } bg-cover text-white w-full max-w-6xl rounded-2xl p-6 shadow-3xl relative overflow-hidden`}
      >
        <div
          className={`h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -top-38 -right-14 blur-[150px] opacity-[0.05]`}
        ></div>
        <div
          className={`h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -bottom-38 -left-14 blur-[150px] opacity-[0.05]`}
        ></div>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="text-xl font-semibold flex items-center gap-2 cursor-pointer hover:text-[#00e889] duration-300"
          >
            {" "}
            <MdArrowBackIosNew />
            DEPOSIT
          </button>
          <button
            onClick={onClose}
            className="text-white text-2xl cursor-pointer relative z-10"
          >
            &times;
          </button>
        </div>

        <div className="flex justify-center mr-6 md:my-8">
          <Image
            src="/images/dashboardImages/frame3.svg"
            alt="wallet"
            height={150}
            width={150}
            className="w-20 md:w-[150px]   "
          />
        </div>

        <form className="flex flex-col gap-4 relative z-10">
          <div>
            <label className="text-base md:text-lg  font-medium block mb-3">
              Deposit Network*
            </label>
            <select className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-gray-700 focus:outline-none">
              <option value="">Deposit Network</option>
              <option value="ETH">Ethereum</option>
              <option value="BSC">Binance Smart Chain</option>
            </select>
          </div>

          <div>
            <label className="text-base md:text-lg  font-medium block mb-3">
              Amount*
            </label>
            <input
              type="text"
              placeholder="$00132"
              className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 mt-6 relative z-10">
            <button
              type="button"
              className="w-[167px] py-2 rounded-full border border-[#00e889] text-[#00e889] hover:bg-green-900 cursor-pointer"
            >
              Clear
            </button>
            <button
              type="submit"
              className="w-[167px] py-2 rounded-full btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositModal;
