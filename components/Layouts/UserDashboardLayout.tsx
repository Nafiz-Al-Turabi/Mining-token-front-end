"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getPageTitle = () => {
    const pathMap: Record<string, string> = {
      "/": "Home",
      "/dashboard": "Dashboard",
      "/settings": "Settings",
      "/profile": "Profile",
      "/users": "Users",
    };

    const matchedPath = Object.keys(pathMap)
      .sort((a, b) => b.length - a.length)
      .find((path) => pathname.startsWith(path));

    return matchedPath ? pathMap[matchedPath] : "Page";
  };

  return (
    <div className="flex bg-[#000503] min-h-screen">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-30 h-screen w-64 transform bg-[#0e0e0e] transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center py-8 pl-12">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={100} height={100} className="w-full" />
          </Link>
        </div>

        <nav className="mt-4 px-4 space-y-2">
          {/* Example menu item */}
          <Link
            href="/"
            className={`flex items-center text-base font-medium px-4 py-3 rounded-md gap-2 ${
              pathname === "/" ? "btn text-primary font-semibold" : "text-main hover:bg-green-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`flex items-center text-base font-medium px-4 py-3 rounded-md gap-2 ${
              pathname.startsWith("/dashboard") ? "btn text-primary font-semibold" : "text-main hover:bg-green-500"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/settings"
            className={`flex items-center text-base font-medium px-4 py-3 rounded-md gap-2 ${
              pathname.startsWith("/settings") ? "btn text-primary font-semibold" : "text-main hover:bg-green-500"
            }`}
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto lg:ml-64">
        <div className="p-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-main focus:outline-none"
          >
            <HiOutlineMenuAlt1 size={26} />
          </button>
        </div>

        {/* Page Title */}
        <div className="bg-[#0e0e0e] text-main p-4">
          <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>
        </div>

        {/* Children content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
