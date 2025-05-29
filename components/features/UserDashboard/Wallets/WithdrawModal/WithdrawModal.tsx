"use client";
import React, { useEffect, useState } from "react";
import noice from "@/public/noice.jpg";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import { useForm } from "react-hook-form";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WithdrawFormValues {
  network: string;
  walletAddress: string;
  amount: string;
  paymentPassword: string;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WithdrawFormValues>();

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setShow(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShow(false);
        reset(); 
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, reset]);

  if (!isOpen && !show) return null;

  const onSubmit = (data: WithdrawFormValues) => {
    console.log("Form submitted:", data);
  };

  const clearForm = () => {
    reset();
  };

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
        <div className="h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -top-38 -right-14 blur-[150px] opacity-[0.05]"></div>
        <div className="h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -bottom-38 -left-14 blur-[150px] opacity-[0.05]"></div>

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="text-xl font-semibold flex items-center gap-2 cursor-pointer hover:text-[#00e889] duration-300 uppercase"
          >
            <MdArrowBackIosNew className="text-[#00e889]" />
            WITHDRAW
          </button>
          <button
            onClick={onClose}
            className="text-white text-2xl cursor-pointer relative z-10"
          >
            &times;
          </button>
        </div>

        <div className="flex justify-center mr-6 2xl:my-8">
          <Image
            src="/images/dashboardImages/frame10.svg"
            alt="wallet"
            height={150}
            width={150}
            className="w-20 2xl:w-[150px]"
          />
        </div>

        <form
          className="flex flex-col gap-4 relative z-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Withdraw Network */}
          <div>
            <label className="block mb-1 font-medium">Withdraw Network*</label>
            <select
              {...register("network", { required: true })}
              className="w-full p-3 rounded-lg bg-[#0e0e0e] text-white border border-gray-700 focus:outline-none"
            >
              <option value="BTC">BTC [Network Bitcoin]</option>
            </select>
            {errors.network && (
              <span className="text-red-500 text-sm">Network is required</span>
            )}
          </div>

          {/* Wallet Address */}
          <div>
            <label className="block mb-1 font-medium">Wallet Address*</label>
            <input
              type="text"
              placeholder="Enter wallet address"
              {...register("walletAddress", { required: true })}
              className="w-full p-3 rounded-lg bg-[#0e0e0e] text-white border border-gray-700 focus:outline-none"
            />
            {errors.walletAddress && (
              <span className="text-red-500 text-sm">Wallet address is required</span>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block mb-1 font-medium">Amount*</label>
            <input
              type="text"
              placeholder="$00132"
              {...register("amount", { required: true })}
              className="w-full p-3 rounded-lg bg-[#0e0e0e] text-white border border-gray-700 focus:outline-none"
            />
            {errors.amount && (
              <span className="text-red-500 text-sm">Amount is required</span>
            )}
          </div>

          {/* Payment Password */}
          <div>
            <label className="block mb-1 font-medium">Payment Password*</label>
            <input
              type="password"
              placeholder="Enter payment password"
              {...register("paymentPassword", { required: true })}
              className="w-full p-3 rounded-lg bg-[#0e0e0e] text-white border border-gray-700 focus:outline-none"
            />
            {errors.paymentPassword && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>

          <div className="flex gap-4 mt-6 relative z-10">
            <button
              type="button"
              onClick={clearForm}
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

export default WithdrawModal;
