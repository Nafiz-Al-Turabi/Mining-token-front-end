import React from "react";

const Check = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M2.99872 11.0367C2.99872 11.0367 4.16538 11.5552 5.72094 13.8886C5.72094 13.8886 5.94249 13.5146 6.35975 12.9184M13.8876 5.33302C12.1053 6.22418 10.2413 8.09554 8.74486 9.86148"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88544 11.0367C6.88544 11.0367 8.0521 11.5553 9.60766 13.8886C9.60766 13.8886 13.8854 7.27751 17.7743 5.33307"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
