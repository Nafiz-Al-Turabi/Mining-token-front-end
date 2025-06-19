"use client";
import React, { useEffect, useState } from "react";
import { LuMessageSquareText } from "react-icons/lu";
import MessageModal from "../MessageModal/MessageModal";

const MessageNotification = ({ message, onClick }: { message: any; onClick: () => void }) => {
  return (
    <div 
      className="flex items-center gap-2 bg-[#08120e] hover:bg-[#152c21] p-2 rounded-md cursor-pointer w-56 text-white"
      onClick={onClick}
    >
      <span>
        <LuMessageSquareText size={20} />
      </span>
      <div className="text-xs">
        <p className="text-gray-500">{message?.email}</p>
        <p className="text-white">{message?.subject}</p>
      </div>
    </div>
  );
};

export default MessageNotification;
