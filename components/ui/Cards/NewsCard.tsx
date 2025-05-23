"use client";
import Image from "next/image";
import Link from "next/link";
import noice from "@/public/noice.jpg";

export default function NewsCard() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }}
      className="bg-cover bg-center overflow-hidden  text-white shadow-lg rounded-2xl px-4 pb-8 pt-4 relative group border-b border-[#00e88744]"
    >
      <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
      <div
        className={`h-[300px] w-[300px] bg-[#00E889] rounded-full absolute -top-40 -right-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div
        className={`h-[300px] w-[300px] bg-[#00E889] rounded-full absolute -bottom-40 -left-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/images/tramp.png"
          alt="Trump News"
          width={512}
          height={300}
          className="aspect-3/2 object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-base lg:text-2xl font-semibold leading-snug mb-4">
          Trump’s World Liberty Financial Proposes Integration with Aave for
          DeFi Platform Launch
        </h3>
        <Link href="/news/trump-defi">
          <span className="inline-block px-4 py-2 border border-[#00e889] rounded-full text-[#00e889] text-sm font-medium hover:bg-[#00e889] hover:text-black transition-all cursor-pointer relative z-10">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
}
