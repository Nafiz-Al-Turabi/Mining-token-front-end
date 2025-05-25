"use client";

import Image from "next/image";
import Link from "next/link";

const UpdatesCard = () => {
  return (
    <div className="bg-[#0b0b0b] rounded-xl p-4  w-full shadow-md text-white bg-cover bg-center relative overflow-hidden border-b border-[#00e88744]">
      <div
        className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -top-[207px] -right-[207px] blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div
        className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -bottom-[207px] -left-[207px] blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
      ></div>
      <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
      <div className="rounded-lg overflow-hidden relative z-10">
        <Image
          src="/images/updatesImages/card-image.jpg"
          alt="AI Task Management"
          width={512}
          height={250}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2 relative z-10">
        <div>
          <div className="flex  justify-between">
            <h2 className="text-lg sm:text-2xl font-semibold w-[20ch] mb-3">
              AI-Powered <span className="text-[#00E889]">Task Management</span>
            </h2>
            <span className="text-base text-gray-400 w-32">15 Aug 2024</span>
          </div>
          <p className="text-sm sm:text-base text-gray-300">
            We’re excited to introduce AI-powered task management, which
            makes...
          </p>
        </div>
        <Link
          href="/updates/ai-task-management"
          className="inline-block mt-2 w-max px-4 py-2 text-sm border border-[#00E889] rounded-full text-[#00E889] hover:bg-[#00E889] hover:text-black transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default UpdatesCard;
