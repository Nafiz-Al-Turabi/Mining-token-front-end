"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  MdArrowBackIosNew,
  MdClose,
  MdCloudUpload,
  MdDelete,
} from "react-icons/md";
import noice from "@/public/noice.jpg";

interface DepositInnerModalProps {
  isOpenInnerModal: boolean;
  onCloseInnerModal: () => void;
}

interface DepositFormValues {
  network: string;
  depositAmount: string;
  walletAddress: string;
  txid: string;
  voucher?: FileList;
}

const NETWORKS = [{ value: "BTC", label: "BTC [Network Bitcoin]" }];

const DepositInnerModal: React.FC<DepositInnerModalProps> = ({
  isOpenInnerModal,
  onCloseInnerModal,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [voucherPreview, setVoucherPreview] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<DepositFormValues>();

  useEffect(() => {
    if (isOpenInnerModal) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        handleClear();
      }, 300);
    }
  }, [isOpenInnerModal]);

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setVoucherPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    reset();
    setVoucherPreview(null);
    setSelectedFileName("");
    setValue("voucher", undefined);
  };

  const removeVoucherPreview = () => {
    setVoucherPreview(null);
    setSelectedFileName("");
    setValue("voucher", undefined);
  };

  const onSubmit = (data: DepositFormValues) => {
    console.log("Deposit form submitted:", data);
    onCloseInnerModal();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => e.target === e.currentTarget && onCloseInnerModal()}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className={`relative w-full max-w-6xl transform overflow-hidden rounded-2xl bg-cover p-6 text-white shadow-2xl transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Background Effects */}
        <div className="absolute -right-14 -top-38 h-[611px] w-[611px] rounded-full bg-[#00E889] opacity-[0.05] blur-[150px]" />
        <div className="absolute -bottom-38 -left-14 h-[611px] w-[611px] rounded-full bg-[#00E889] opacity-[0.05] blur-[150px]" />

        {/* Header */}
        <header className="relative z-10 mb-6 flex items-center justify-between">
          <button
            onClick={onCloseInnerModal}
            className="flex items-center gap-2 text-xl font-semibold uppercase transition-colors duration-300 hover:text-[#00e889]"
          >
            <MdArrowBackIosNew className="text-[#00e889]" />
            Deposit
          </button>
          <button
            onClick={onCloseInnerModal}
            className="rounded-full p-1 text-2xl transition-colors hover:bg-white/10"
          >
            <MdClose />
          </button>
        </header>

        {/* QR Code Section */}
        <div className="relative z-10 mb-6 flex flex-col items-center">
          <div className="mb-4 rounded-lg bg-white ">
            <Image
              src="/qr-code.png"
              alt="Deposit QR Code"
              width={100}
              height={100}
              className="rounded w-20 md:w-25"
            />
          </div>
          <p className="mx-auto max-w-md text-center text-[0.7rem] lg:text-sm text-gray-300">
            Send funds to the specified address or scan the QR code. Your
            deposit will be credited to your account after confirmation.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-10 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Network Selection */}
            <div>
              <label className="mb-2 block text-[0.7rem] lg:text-sm font-medium">
                Deposit Network <span className="text-red-400">*</span>
              </label>
              <select
                {...register("network", {
                  required: "Network selection is required",
                })}
                className="w-full text-xs lg:text-base rounded-lg border border-gray-700 bg-[#0e0e0e] p-4 text-gray-400 focus:border-[#00e889] focus:outline-none placeholder:text-xs lg:placeholder:text-base"
              >
                <option value="">Select Network</option>
                {NETWORKS.map((network) => (
                  <option key={network.value} value={network.value}>
                    {network.label}
                  </option>
                ))}
              </select>
              {errors.network && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.network.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-[0.7rem] lg:text-sm font-medium">
                Deposit Amount <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="0.00777700"
                {...register("depositAmount", {
                  required: "Deposit amount is required",
                  pattern: {
                    value: /^\d*\.?\d+$/,
                    message: "Please enter a valid amount",
                  },
                })}
                className="w-full rounded-lg border border-gray-700 bg-[#0e0e0e] p-3 text-white focus:border-[#00e889] focus:outline-none placeholder:text-xs lg:placeholder:text-base"
              />
              {errors.depositAmount && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.depositAmount.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-[0.7rem] lg:text-sm font-medium">
                Wallet Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter wallet address"
                {...register("walletAddress", {
                  required: "Wallet address is required",
                })}
                className="w-full rounded-lg border border-gray-700 bg-[#0e0e0e] p-3 text-white focus:border-[#00e889] focus:outline-none placeholder:text-xs lg:placeholder:text-base"
              />
              {errors.walletAddress && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.walletAddress.message}
                </p>
              )}
            </div>

            {/* TXID */}
            <div>
              <label className="mb-2 block text-[0.7rem] lg:text-sm font-medium">
                TXID<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter transaction ID"
                {...register("txid", {
                  required: "Transaction ID is required",
                })}
                className="w-full rounded-lg border border-gray-700 bg-[#0e0e0e] p-3 text-white focus:border-[#00e889] focus:outline-none placeholder:text-xs lg:placeholder:text-base"
              />
              {errors.txid && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.txid.message}
                </p>
              )}
            </div>
          </div>

          {/* Payment Voucher Upload */}
          <div>
            <label className="mb-2 block text-[0.7rem] lg:text-sm font-medium">
              Payment Voucher
            </label>
            <div className="rounded-lg border border-gray-700 bg-[#0e0e0e] p-6 transition-colors hover:border-[#00e889]/50">
              {!voucherPreview ? (
                <div className="flex flex-col items-center justify-center text-center">
                  <input
                    type="file"
                    {...register("voucher")}
                    id="voucher-upload"
                    accept="image/*"
                    onChange={handleVoucherChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="voucher-upload"
                    className="flex cursor-pointer flex-col items-center gap-3 rounded-lg p-4 transition-colors hover:bg-[#00e889]/10"
                  >
                    <MdCloudUpload className="text-4xl text-[#00e889]" />
                  </label>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <img
                      src={voucherPreview}
                      alt="Payment Voucher Preview"
                      className="h-0 w-0 md:h-32 md:w-32 rounded-lg border border-gray-600 object-cover shadow-lg"
                    />
                    <button
                      type="button"
                      onClick={removeVoucherPreview}
                      className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white transition-colors hover:bg-red-600"
                    >
                      <MdDelete className="text-sm" />
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-[#00e889]">
                      ✓ Uploaded
                    </p>
                    <p className="text-xs text-gray-400">{selectedFileName}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Information Note */}
          <div className="">
            <p className="text-[0.7rem] lg:text-sm text-gray-300">
              <strong>Important:</strong> After confirming your transfer, please
              upload a screenshot showing the TXID. Deposits are processed
              within 30 minutes. Contact our 24/7 support team for assistance.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex  gap-4 pt-4">
            <button
              type="button"
              onClick={handleClear}
              className="rounded-full border border-[#00e889] px-8 py-2 text-[#00e889] transition-colors hover:bg-[#00e889]/10"
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-full btn btn-primary px-8 py-2 font-medium text-black transition-all hover:shadow-lg hover:shadow-[#00e889]/25"
            >
              Submit Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositInnerModal;
