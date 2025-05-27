"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import PageHeader from "../features/UserDashboard/PageHeader/PageHeader";
import RocketIcon from "../icons/RocketIcon";
import WalletIcon from "../icons/WalletIcon";
import CartIcon from "../icons/CartIcon";
import CoinIcon from "../icons/CoinIcon";
import ReferrIcon from "../icons/ReferrIcon";
import SettingsIcon from "../icons/SettingsIcon";
import DashboardIcon from "../icons/DashboardIcon";
import LogoutIcon from "../icons/LogoutIcon";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { href: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    {
      href: "/dashboard/start-mining",
      icon: <RocketIcon />,
      label: "Start Mining ",
    },
    { href: "/dashboard/wallets", icon: <WalletIcon />, label: "Wallets" },
    { href: "/dashboard/orders", icon: <CartIcon />, label: "Orders" },
    { href: "/dashboard/profit", icon: <CoinIcon />, label: "Profit" },
    {
      href: "/dashboard/referral-rewards",
      icon: <ReferrIcon />,
      label: "Referral Rewards",
    },
    { href: "/dashboard/settings", icon: <SettingsIcon />, label: "Settings" },
  ];

  const getPageTitle = () => {
    const matchedItem = menuItems
      .sort((a, b) => b.href.length - a.href.length)
      .find((item) => pathname.startsWith(item.href));
    return matchedItem ? matchedItem.label : "Page";
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
      <aside
        className={`fixed flex flex-col justify-between z-30 h-screen w-64 transform bg-[#0e0e0e] transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div>
          <div className="flex items-center py-5 px-6">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-full"
              />
            </Link>
          </div>

          <nav className="mt-4 px-4 space-y-2">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center text-sm font-medium px-4 py-3 rounded-full gap-2 transition-all duration-300 ${
                  isActive
                    ? "btn font-semibold text-white"
                    : " hover:bg-[#00e889]"
                }`}
              >
                {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mb-6  px-4">
          <button className="flex items-center gap-2 text-base lg:text-lg text-white hover:bg-[#00e88711] w-full py-2 px-4 rounded-full duration-300 cursor-pointer">
            <LogoutIcon />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto lg:ml-64">
        {/* Page Header */}
        <div className="flex justify-between items-center bg-[#0e0e0e] p-6 fixed lg:static top-0 left-0 right-0 z-50 ">
          <div className="lg:hidden">
            <button onClick={toggleSidebar} className="focus:outline-none">
              <HiOutlineMenu size={26} />
            </button>
          </div>
          <h1 className="hidden lg:block text-xl font-semibold bg-gradient-to-l from-[#067549] to-[#00e889] text-transparent bg-clip-text w-fit">
            {getPageTitle()}
          </h1>
          <div>
            <PageHeader />
          </div>
        </div>

        {/* Children */}
        <div className="p-4 mt-20 lg:mt-0">{children}</div>
      </main>
    </div>
  );
}
