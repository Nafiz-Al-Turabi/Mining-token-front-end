"use client";

import Image from "next/image";
import Link from "next/link";

const UpdatesCard = () => {
  return (
    <div className="bg-[#0B0F12] rounded-xl p-4  w-full shadow-md text-white">
      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/images/updatesImages/card-image.jpg"
          alt="AI Task Management"
          width={512}
          height={300}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-2">
        {/* Title + Date */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold">
            AI-Powered <span className="text-green-400">Task Management</span>
          </h2>
          <span className="text-sm text-gray-400">15 Aug 2024</span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300">
          We’re excited to introduce AI-powered task management, which makes...
        </p>

        {/* Read More Button */}
        <Link
          href="/updates/ai-task-management"
          className="inline-block mt-2 w-max px-4 py-2 text-sm border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default UpdatesCard;
