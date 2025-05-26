"use client";
import { useState } from "react";
import bgImage from "@/public/images/authImages/login-bg.jpg";
import noise from "@/public/noice.jpg";
import { SearchIcon } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

const dropdownData = [
  {
    title: "Getting Started",
    items: ["System Requirements", "Account Setup", "First Steps"],
  },
  {
    title: "Installation",
    items: ["Download App", "Install Guide", "Troubleshooting"],
  },
  {
    title: "Advanced Usage",
    items: ["Custom Scripts", "APIs", "Integration Tips"],
  },
];

const Guide = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(68.23% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%),url(${bgImage.src})`,
      }}
      className="bg-cover bg-center bg-no-repeat pt-36 pb-16 lg:pt-56 lg:pb-32 px-4"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-[2px] border border-[#23513e] rounded-2xl p-4">
        {/* SIDEBAR */}
        <aside className="md:w-1/3">
          <div className="relative mb-6">
            <input
              type="text"
              className="bg-[#0e0e0e] border border-[#23513e] focus:outline-none rounded-full pl-14 pr-3 py-3 w-full"
              placeholder="Search something"
            />
            <SearchIcon className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2" />
          </div>

          {/* Dropdowns */}
          {dropdownData.map((section, index) => (
            <div key={index} className="w-full mb-4">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center btn btn-primary font-semibold px-4 py-3 rounded-full shadow-md transition-all duration-300"
              >
                {section.title}
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <div className="ml-4 border-l-2 border-white pl-4 mt-2">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 mb-3 group transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-white opacity-70 group-hover:bg-[#00E889] transition-all"></div>
                      <button className="bg-[#0E0E0E] guide-box-shadow text-white rounded-full px-6 py-3 text-sm border border-transparent hover:border-[#00E889] hover:text-[#00E889] transition-all">
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main
          style={{
            backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noise.src})`,
          }}
          className="md:w-2/3 bg-cover bg-center bg-no-repeat rounded-2xl p-6 border-b border-[#00e88744] relative overflow-hidden group"
        >
          <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
          <div className="h-[816px] w-[816px] bg-[#00E889] rounded-full absolute -top-[414px] -left-[447px] blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300"></div>
          <div className="h-[816px] w-[816px] bg-[#00E889] rounded-full absolute -bottom-[414px] left-[447px] blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300"></div>

          <div className="relative z-10">
            <h1 className="text-2xl font-bold mb-3">System Requirements</h1>
            <p className="text-base">
              Welcome to Nexus AI! If you're a first-time user, follow these
              steps to get started quickly and make the most of your experience.
            </p>
          </div>

          <div className="mt-4 relative z-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="mb-4">
                <h1 className="text-2xl font-bold mb-3">What is Nexus AI?</h1>
                <p className="text-base">
                  Nexus AI is an innovative platform that leverages artificial
                  intelligence (AI) to assist users in various aspects of web
                  design and content creation. This powerful tool offers a range
                  of features designed to streamline workflows and enhance
                  creativity.
                </p>
              </div>
            ))}
            <div className="flex justify-between mt-6">
              <button className="btn btn-primary">Previous</button>
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Guide;
