"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgIamge from "@/public/images/authImages/login-bg.jpg";
import noice from "@/public/noice.jpg";
import Link from "next/link";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `radial-gradient(68.23% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%),url(${bgIamge.src})`,
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        {" "}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4 mt-20 md:mt-0">
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
            }}
            className="bg-cover bg-center px-4 py-8 md:p-8 rounded-3xl shadow-lg w-full max-w-2xl text-white space-y-6 relative overflow-hidden"
          >
            <div
              className={`h-[800px] w-[800px] bg-[#00E889] rounded-full absolute -top-100 -left-100 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-200`}
            ></div>
            <div
              className={`h-[400px] w-[400px] bg-[#00E889] rounded-full absolute -bottom-60 -right-60 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
            ></div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <img src="/logo.svg" alt="MiningToken" className="h-8" />{" "}
                {/* Replace with your logo */}
              </div>
              <h2 className="text-2xl md:text-[2.5rem] font-semibold">
                Welcome To
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 relative z-10"
            >
              <div>
                <label
                  className="block text-base md:text-lg mb-3"
                  htmlFor="email"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-base md:text-lg mb-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="example@gmail.com"
                  className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                  required
                />
              </div>

              <div className="relative">
                <label
                  className="block text-base md:text-lg mb-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password")}
                  placeholder="Enter your password"
                  className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                  required
                />
                <span
                  className="absolute right-4 bottom-[1.1rem] cursor-pointer text-zinc-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={24} />
                  ) : (
                    <FaEye size={24} />
                  )}
                </span>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-4 ">
                Register Now
              </button>
            </form>

            <p className="text-center text-sm md:text-lg ">
              Already have an account?{" "}
              <Link href="/login" className="text-[#00e889] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
