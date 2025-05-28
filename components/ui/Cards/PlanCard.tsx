"use client";
import doller from "@/public/images/homeImages/doller.svg";
import noice from "@/public/noice.jpg";
import { useRouter } from "next/navigation";

const PlanCard = ({ soldOut }: { soldOut: boolean }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="bg-[#010101f3] rounded-[18px] p-4 bg-cover bg-center relative overflow-hidden group border-b border-[#00e88744]"
      >
        <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
        <div
          className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -bottom-50 -left-50 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
        ></div>
        <div
          className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -top-50 -right-50 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
        ></div>
        <div className="flex justify-center">
          <img src={doller.src} alt="dollar" />
        </div>
        <div className="text-center my-6">
          <h2 className="text-lg sm:text-2xl font-semibold text-white">
            Wind-126TH【Flash Sale】
          </h2>
          <p className="text-white text-xl sm:text-[2rem] font-semibold">
            $3,800.00
          </p>
        </div>
        <ul className="space-y-2 mb-6">
          <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
            <p className="flex items-center gap-2">
              <span>
                <img src="/images/homeImages/check.svg" alt="check" />
              </span>
              Daily Rewards
            </p>
            <p>$3,800.00</p>
          </li>
          <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
            <p className="flex items-center gap-2">
              <span>
                <img src="/images/homeImages/check.svg" alt="check" />
              </span>
              Total Earnings
            </p>
            <p>$3,800.00</p>
          </li>
          <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
            <p className="flex items-center gap-2">
              <span>
                <img src="/images/homeImages/check.svg" alt="check" />
              </span>
              Matured Amount
            </p>
            <p>$3,800.00</p>
          </li>
          <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
            <p className="flex items-center gap-2">
              <span>
                <img src="/images/homeImages/check.svg" alt="check" />
              </span>
              Matured Amount
            </p>
            <p>$3,800.00</p>
          </li>
          <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
            <p className="flex items-center gap-2">
              <span>
                <img src="/images/homeImages/check.svg" alt="check" />
              </span>
              Matured Amount
            </p>
            <p>$3,800.00</p>
          </li>
        </ul>

        <button onClick={() => router.push("/plans/id")} className="card-btn relative z-10">Invest Now</button>
      </div>
      {/* sold out */}
      {soldOut && (
        <>
          <img
            src="/images/homeImages/sold-out.svg"
            alt="sold out"
            className="absolute top-7 -right-[15px]"
          />
          <span className="absolute top-6 -right-[15px] text-xl font-semibold bg-gradient-to-r from-[#00E889] to-[#067549] text-white px-6 py-2 rounded-t-md rounded-l-md">
            Sold Out
          </span>
        </>
      )}
    </div>
  );
};

export default PlanCard;
