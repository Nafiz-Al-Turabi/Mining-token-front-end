"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import noice from "@/public/noice.jpg";
import { useRouter } from "next/navigation";

export default function SettingWallet() {
  const [showPassword, setShowPassword] = useState(false);
  const [useDefaultPassword, setUseDefaultPassword] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      withdrawNetwork: "",
      walletAddress: "",
      paymentPassword: "",
      useDefaultPassword: true,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  const handleClear = () => {
    reset();
    setUseDefaultPassword(true);
    setShowPassword(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDefaultPasswordChange = (checked: boolean) => {
    setUseDefaultPassword(checked);
    setValue("useDefaultPassword", checked);
    if (checked) {
      setValue("paymentPassword", "123456");
    } else {
      setValue("paymentPassword", "");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }}
      className=" text-white bg-cover bg-center rounded-3xl  relative overflow-hidden group"
    >
      <div
        className={`h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -top-[149px] -right-[57px] blur-[150px] opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-300`}
      />
      <div
        className={`h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -bottom-[149px] -left-[57px] blur-[150px] opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-300`}
      />
      <div className=" p-4 md:p-6 lg:p-12 relative z-10">
        {/* Header */}
        <div onClick={()=>router.back()} className="flex items-center mb-8 pt-2 cursor-pointer">
          <ChevronLeft className="w-6 h-6 text-[#00e889] mr-2" />
          <h1 className="text-2xl font-normal">Wallet</h1>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Withdraw Network */}
          <div>
            <label className="block text-base md:text-lg font-normal mb-3 text-white">
              Withdraw Network<span className="text-red-500">*</span>
            </label>
            <input
              {...register("withdrawNetwork", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Withdraw Network"
              className="w-full py-3 bg-[#0e0e0e] border border-[#3a3a3a] rounded-xl px-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00e889] transition-colors"
            />
            {errors.withdrawNetwork && (
              <span className="text-red-500 text-xs mt-1">
                {errors.withdrawNetwork.message}
              </span>
            )}
          </div>

          {/* Wallet Address */}
          <div>
            <label className="block text-base md:text-lg font-normal mb-3 text-white">
              Wallet Address<span className="text-red-500">*</span>
            </label>
            <input
              {...register("walletAddress", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Type Here..."
              className="w-full py-3 bg-[#0e0e0e] border border-[#3a3a3a] rounded-xl px-4 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00e889] transition-colors"
            />
            {errors.walletAddress && (
              <span className="text-red-500 text-xs mt-1">
                {errors.walletAddress.message}
              </span>
            )}
          </div>

          {/* Payment Password */}
          <div>
            <label className="block text-base md:text-lg font-normal mb-3 text-white">
              Payment Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("paymentPassword", {
                  required: "This field is required",
                })}
                type={showPassword ? "text" : "password"}
                className="w-full py-3 bg-[#0e0e0e] border border-[#3a3a3a] rounded-xl px-4 pr-12 text-white text-sm focus:outline-none focus:border-[#00e889] transition-colors"
                value={
                  useDefaultPassword ? "123456" : undefined
                }
                readOnly={useDefaultPassword}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Default Password Checkbox */}
            <div className="flex items-center mt-4">
              <div className="relative">
                <input
                  type="checkbox"
                  id="defaultPassword"
                  checked={useDefaultPassword}
                  onChange={(e) =>
                    handleDefaultPasswordChange(e.target.checked)
                  }
                  className="w-5 h-5 bg-[#0e0e0e] border border-[#3a3a3a] rounded focus:ring-0 focus:ring-offset-0 text-[#00e889] appearance-none checked:bg-[#00e889] checked:border-green-400"
                />
                {useDefaultPassword && (
                  <svg
                    className="w-4 h-4 text-black absolute top-0.5 left-0.5 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <label
                htmlFor="defaultPassword"
                className="ml-3 text-sm text-gray-300 font-normal"
              >
                Default password: 123456
              </label>
            </div>
            {errors.paymentPassword && (
              <span className="text-red-500 text-xs mt-1">
                {errors.paymentPassword.message}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleClear}
              className="md:w-42 px-8 py-3 bg-transparent border border-[#00e889] text-[#00e889] rounded-full font-normal text-base hover:bg-[#00e889]/20 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="md:w-42 px-8 py-3 btn btn-primary text-black rounded-full font-normal text-sm hover:bg-green-500 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
