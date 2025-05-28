"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";

const PasswordChangeStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const steps = [
    { number: 1, title: "Personal Information" },
    { number: 2, title: "Payment Password change" },
    { number: 3, title: "Login Password change" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    if (currentStep < 3) {
      if (!completedSteps.includes(currentStep as never)) {
        setCompletedSteps([...completedSteps, currentStep as never]);
      }
      setCurrentStep(currentStep + 1);
    } else {
      alert("Password change process completed!");
    }
  };

  const handleClear = () => {
    reset();
  };

  const watchedNewPassword = watch("newPassword");

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="mt-12 relative z-10">
            <div>
              <label className="block text-white text-base mb-3">
                Verification Code<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                {...register("verificationCode", {
                  required: "Verification code is required",
                })}
                type="text"
                className="w-full py-3 px-4 bg-[#0E0E0E] border border-[#424242] rounded-lg text-white text-base focus:outline-none focus:border-[#00E889] transition-colors"
              />
              {errors.verificationCode && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.verificationCode.message as string}
                </p>
              )}
            </div>
          </div>
        );

      case 2:
      case 3:
        return (
          <div className="mt-12 space-y-8 relative z-10">
            <div>
              <label className="block text-white text-base mb-3">
                New Password<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                className="w-full py-3 px-4 bg-[#0E0E0E] border border-[#424242] rounded-lg text-white text-base focus:outline-none focus:border-[#00E889] transition-colors"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.newPassword.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block text-white text-base mb-3">
                Repeat Password<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                {...register("repeatPassword", {
                  required: "Please repeat your password",
                  validate: (value) =>
                    value === watchedNewPassword || "Passwords do not match",
                })}
                type="password"
                className="w-full py-3 px-4 bg-[#0E0E0E] border border-[#424242] rounded-lg text-white text-base focus:outline-none focus:border-[#00E889] transition-colors"
              />
              {errors.repeatPassword && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.repeatPassword.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block text-white text-base mb-3">
                Google Verification Code
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                {...register("googleVerificationCode", {
                  required: "Google verification code is required",
                })}
                type="text"
                className="w-full py-3 px-4 bg-[#0E0E0E] border border-[#424242] rounded-lg text-white text-base focus:outline-none focus:border-[#00E889] transition-colors"
              />
              {errors.googleVerificationCode && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.googleVerificationCode.message as string}
                </p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Calculate progress percentage based on completed steps
  const getProgressPercentage = () => {
    if (completedSteps.length === 0) return 0;
    return (completedSteps.length / (steps.length - 1)) * 100;
  };

  return (
    <div className="flex items-center justify-center rounded-3xl overflow-hidden relative">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url('https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop')`,
        }}
        className="w-full px-4 md:px-8 py-8 lg:py-12 bg-cover bg-top rounded-3xl overflow-hidden relative"
      >
        <div
          className={`h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -top-[149px] -right-[254px] blur-[200px] opacity-[0.05] group-hover:opacity-[0.2] transition-all duration-300`}
        />
        <div
          className={`h-[611px] w-[611px] bg-[#00E889] rounded-full absolute -bottom-[149px] -left-[254px] blur-[200px] opacity-[0.05] group-hover:opacity-[0.2] transition-all duration-300`}
        />
        
        <div>
          {/* Stepper Header */}
          <div className="">
            <div className="flex items-start justify-between relative">
              <div className="max-w-[70%] absolute top-5 left-0 right-0 h-[2px] flex">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "radial-gradient(circle, #6b7280 2px, transparent 2px)",
                    backgroundSize: "8px 2px",
                    backgroundRepeat: "repeat-x",
                  }}
                />
                <div
                  className="absolute top-0 left-0 h-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${getProgressPercentage()}%`,
                    backgroundImage: "radial-gradient(circle, #00E889 2px, transparent 2px)",
                    backgroundSize: "8px 2px",
                    backgroundRepeat: "repeat-x",
                  }}
                />
              </div>

              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-col relative z-10 flex-1"
                >
                  {/* Step Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-3 relative border-[6px] border-[#0B1913] transition-all duration-300 ${
                      completedSteps.includes(step.number as never)
                        ? "bg-gradient-to-r from-[#067549] to-[#00E889] text-white"
                        : step.number === currentStep
                        ? "bg-[#00E889] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gray-900 rounded-full -z-10"></div>
                    {completedSteps.includes(step.number as never) ? (
                      <Check size={24} />
                    ) : (
                      `0${step.number}`
                    )}
                  </div>

                  {/* Step Title */}
                  <span
                    className={`text-[0.5rem] sm:text-sm font-medium leading-tight px-2 transition-colors duration-300 ${
                      step.number === currentStep ||
                      completedSteps.includes(step.number as never)
                        ? "text-green-400"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {renderStepContent()}
            <div className="flex gap-6 mt-6 relative z-10">
              <button
                type="button"
                onClick={handleClear}
                className="p-3 w-[167px] btn text-white font-semibold rounded-full transition-all text-base cursor-pointer duration-300"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="p-3 w-[167px] bg-transparent hover:bg-[#00E889]/10 text-green-400 hover:text-green-300 font-semibold rounded-full border border-[#00E889] hover:border-green-400 transition-all text-base cursor-pointer duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeStepper;