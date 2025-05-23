"use client";
import React from "react";
import { useForm } from "react-hook-form";
import bgIamge from "@/public/images/authImages/login-bg.jpg";
import noice from "@/public/noice.jpg";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

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
        <div className=" flex flex-col items-center justify-center bg-gradient-to-br p-4 mt-20 md:mt-40 mb-16">
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-[4rem] font-bold" >Contact Us</h1>
            <p className="text-sm md:text-lg lg:text-xl w-[40ch] mx-auto">
              If you have any questons, please fll in your question or
              consuit24-hour oniine cuslomer service.
            </p>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
            }}
            className="bg-cover bg-center px-4 py-8 md:p-8 rounded-3xl shadow-lg w-full max-w-[868px] text-white space-y-6 relative overflow-hidden"
          >
            <div className="h-[1px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-6 left-1/2 -translate-x-1/2"></div>
            <div
              className={`h-[800px] w-[800px] bg-[#00E889] rounded-full absolute -top-100 -left-100 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-200`}
            ></div>
            <div
              className={`h-[400px] w-[400px] bg-[#00E889] rounded-full absolute -bottom-60 -right-60 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
            ></div>
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-[2.5rem] font-semibold">
                Ask Any Questions Here
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label
                  className="block text-base md:text-lg mb-3"
                  htmlFor="email"
                >
                  Full Name
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
              <div className="md:col-span-2">
                <label
                  className="block text-base md:text-lg mb-3"
                  htmlFor="email"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  placeholder="Type your subject"
                  className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-base md:text-lg mb-3"
                  htmlFor="email"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Type your message"
                  className="w-full p-4 rounded-lg bg-[#0e0e0e] text-white border border-zinc-700 focus:outline-none focus:border focus:border-[#00e889]"
                  required
                />
              </div>

              <button
                type="submit"
                className=" md:col-span-2 btn btn-primary w-full mt-4 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
