"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import noice from "@/public/noice.jpg";

export default function TwoFactorAuthCard() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }}
      className="bg-cover bg-top text-white p-6 rounded-3xl relative overflow-hidden "
    >
      <div
        className={`h-[344px] w-[344px] bg-[#00E889] rounded-full absolute -top-40 -left-40 blur-[150px] opacity-[0.05]`}
      />
      <div
        className={`h-[344px] w-[344px] bg-[#00E889] rounded-full absolute -bottom-40 -right-40 blur-[150px] opacity-[0.05]`}
      />

      <h3 className="text-2xl font-semibold mb-4">
        Two factor Authenticator apps
      </h3>

      <p className="text-xs mb-4">
        Install Google authentication (Install here) or Authenticator apps
        Chrome Extension or Firefox Add-ons.
      </p>

      <div className="text-center flex justify-center gap-2 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="bg-[#1A1A0F] text-[#fec401] h-8 w-8 rounded flex items-center justify-center"
          >
            <FaStar size={24} />
          </span>
        ))}
      </div>

      <div className="flex justify-center my-3">
        <Image
          src="/qr-code.png"
          alt="QR Code for Two Factor Authentication"
          width={344}
          height={344}
        />
      </div>

      <p className="text-center text-base">VJ2TFWIA2KHTO3T</p>
    </div>
  );
}
