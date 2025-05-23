'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import bgIamge from '@/public/images/authImages/login-bg.jpg'


const LoginFrom = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div style={{ backgroundImage: `radial-gradient(68.23% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%),url(${bgIamge.src})` }} className='bg-cover bg-center bg-no-repeat'>
      {" "}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-4">
        <div className="bg-zinc-900 p-8 rounded-3xl shadow-lg w-full max-w-2xl text-white space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/logo.svg" alt="MiningToken" className="h-8" />{" "}
              {/* Replace with your logo */}
            </div>
            <h2 className="text-[2.5rem] font-semibold">Welcome To</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
            <div>
              <label className="block text-lg mb-3" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="example@gmail.com"
                className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-lg mb-3" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                placeholder="Enter your password"
                className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                required
              />
              <span
                className="absolute right-4 bottom-[1.1rem] cursor-pointer text-zinc-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-[#00e889] "
                  {...register("remember")}
                />
                <span className='text-lg'>Remember Me</span>
              </label>
              <a href="#" className="text-lg text-orange-500 hover:underline">
                Forget Password
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4 "
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm">
            Don’t have any account?{" "}
            <a href="#" className="text-[#00e889] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
