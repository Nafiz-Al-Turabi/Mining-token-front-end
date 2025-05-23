"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/noice.jpg";

const Footer = () => {
  return (
    <footer style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.966), rgba(0, 0, 0, 0.966)), url(${heroImage.src})`,
    }}
    className="mb-20 md:mb-0 pt-12 pb-6 text-sm text-white bg-cover bg-center bg-no-repeat relative overflow-hidden">
      
      <div className="h-[836px] w-[836px] bg-[#00E889] rounded-full absolute -top-20  left-0 blur-[150px] opacity-[0.1]"></div>
      <div className="h-[836px] w-[836px] bg-[#00E889] rounded-full absolute -top-20 right-0 blur-[150px] opacity-[0.1]"></div>
      <div className="text-white max-w-[1320px] mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
        {/* Logo & Address */}
        <div className="col-span-2 md:col-span-1">
          <Image src="/logo.svg" alt="MiningToken" width={288} height={100} />
          <div className="mt-4 text-gray-300">
            <p className="font-semibold text-xl my-5 text-white">Community</p>
            <p>145 City Rd, London, United Kingdom, EC1V 1AZ</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Services</h2>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link href="#" className=" text-base md:text-lg">
                SMining Plans
              </Link>
            </li>
            <li>
              <Link href="#" className=" text-base md:text-lg">
                Earn Free Bitcoin
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">About</h2>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link href="#" className=" text-base md:text-lg">
                Company
              </Link>
            </li>
            <li>
              <Link href="#" className=" text-base md:text-lg">
                Crypto News
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Support</h2>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link href="#" className=" text-base md:text-lg">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className=" text-base md:text-lg">
                What is Cloud Mining
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">Legal</h2>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link href="#" className=" text-base md:text-lg">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className=" text-base md:text-lg">
                AML Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider & Bottom Text */}
      <div className="max-w-[1320px] mx-auto pb-4 md:pb-0 px-4 mt-10 border-t border-[#1e2e2b] pt-4 text-center text-gray-400 text-sm">
        © 2025 MiningToken. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
