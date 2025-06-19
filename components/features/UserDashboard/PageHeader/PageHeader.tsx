"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Bell } from "lucide-react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import MessageNotification from "../Messages/MessageNotification/MessageNotification";
import MessageModal from "../Messages/MessageModal/MessageModal";

const PageHeader = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await fetch("/messeage.json");
      const data = await response.json();
      const unreadMessages = data.filter((item: any) => item.isRead === false);
      setMessage(unreadMessages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessageClick = (message: any) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const dropdownClasses = (key: string) =>
    `absolute right-0 mt-2 min-w-[160px] bg-[#000503] text-black rounded-md shadow-lg z-50 p-2 border border-[#00e889]  transform transition-all duration-200 ease-out origin-top-right
     ${
       openDropdown === key
         ? "opacity-100 scale-100"
         : "opacity-0 scale-95 pointer-events-none"
     }`;

  return (
    <div
      ref={containerRef}
      className="flex justify-end items-center gap-4 text-white w-full relative"
    >
      {/* Language Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("language")}
          className="flex items-center gap-2 hover:text-[#00e889]"
        >
          <Globe size={24} className="text-[#00e889]" />
          <span>English</span>
          <span>
            <IoIosArrowDown size={24} />
          </span>
        </button>
        <div className={dropdownClasses("language")}>
          <p className="hover:bg-[#00e889] text-white hover:text-black px-2 py-1 cursor-pointer rounded">
            English
          </p>
          <p className="hover:bg-[#00e889] text-white hover:text-black px-2 py-1 cursor-pointer rounded">
            Deutsch
          </p>
          <p className="hover:bg-[#00e889] text-white hover:text-black px-2 py-1 cursor-pointer rounded">
            Español
          </p>
        </div>
      </div>

      {/* Notification Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("notifications")}
          className="relative text-[#00e889] hover:text-[#447460] cursor-pointer"
        >
          <Bell size={24} className="text-[#00e889]" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full" />
        </button>
        <div className={dropdownClasses("notifications")}>
          <p className="font-semibold text-white">Notifications</p>
          {message?.length > 0 ? (
            <div className="space-y-2">
              {message.map((item: any) => (
                <MessageNotification
                  key={item.id}
                  message={item}
                  onClick={() => handleMessageClick(item)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-white">No notifications</div>
          )}
        </div>
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown("profile")}
          className="flex items-center gap-2 hover:text-[#00e889]"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full w-8 h-8"
          />
          <span className="hidden sm:block text-sm">HEXminer@gmail.com</span>
          <span>
            <IoIosArrowDown size={24} />
          </span>
        </button>
        <div className={dropdownClasses("profile")}>
          <p className="hover:bg-[#00e889] text-white hover:text-black px-2 py-1 cursor-pointer rounded">
            My Profile
          </p>
          <p className="hover:bg-[#00e889] text-white hover:text-black px-2 py-1 cursor-pointer rounded">
            Settings
          </p>
          <p className="hover:bg-[#00e889] text-white hover:text-black px-2 py-1 cursor-pointer rounded">
            Logout
          </p>
        </div>
      </div>
      {isModalOpen && (
        <MessageModal message={selectedMessage} onClose={closeModal} />
      )}
    </div>
  );
};

export default PageHeader;
