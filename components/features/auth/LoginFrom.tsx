'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginFrom = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      {" "}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 p-4">
        <div className="bg-zinc-900 p-8 rounded-3xl shadow-lg w-full max-w-md text-white space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/logo.png" alt="MiningToken" className="h-8" />{" "}
              {/* Replace with your logo */}
            </div>
            <h2 className="text-2xl font-semibold">Welcome To</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                placeholder="***********"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <span
                className="absolute right-4 top-[38px] cursor-pointer text-zinc-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-green-500"
                  {...register("remember")}
                />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-orange-500 hover:underline">
                Forget Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-green-600 py-2 rounded-full text-white font-semibold hover:opacity-90"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm">
            Don’t have any account?{" "}
            <a href="#" className="text-green-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
