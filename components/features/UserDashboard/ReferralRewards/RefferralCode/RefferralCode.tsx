"use client"
import React, { useState } from "react";
import bgImage from "@/public/images/updatesImages/update-hero-bg.jpg";

const RefferralCode = () => {
  const [showNotification, setShowNotification] = useState(false);
  const referralCode = "5TkXKB";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(147.4% 50% at 50% 50%, rgba(14, 14, 14, 0.00) 0%, #0E0E0E 100%), url(${bgImage.src})`,
      }}
      className="h-56 w-full bg-cover bg-center bg-no-repeat rounded-3xl flex items-center p-12 relative"
    >
      <div className="relative z-10 flex justify-between items-center w-full">
        <div>
            <p>Invitation code</p>
            <p className="text-[2rem] font-bold">{referralCode}</p>
        </div>
        <button 
          onClick={handleCopy}
          className="btn btn-primary w-32 h-12"
        >
          Copy
        </button>
      </div>
      
      {/* Notification */}
      {showNotification && (
        <div className="absolute top-4 right-4 bg-[#00e889] text-black px-4 py-2 rounded-md transition-opacity duration-300">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default RefferralCode;
