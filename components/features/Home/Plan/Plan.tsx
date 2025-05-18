import noice from "@/public/noice.jpg";
import doller from "@/public/images/homeImages/doller.svg";

const Plan = () => {
  return (
    <div className="bg-[#000503] py-15">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="mb-16">
          <h1 className="sm:w-[24ch] mx-auto text-2xl lg:text-[4rem] font-semibold text-white text-center leading-[130%]">
            Select your{" "}
            <span className="bg-gradient-to-l from-[#067549] to-[#00E889] bg-clip-text text-transparent">
              mining plan
            </span>{" "}
            to start earning
          </h1>
          <p className="sm:w-[60ch] mx-auto text-white text-center text-sm lg:text-lg font-normal tracking-[0.12px] mt-4">
            Choose the mining plan that suits you and enjoy the benefits of
            stable returns and cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
            }}
            className="bg-[#010101f3] rounded-2xl p-4 bg-cover bg-center relative overflow-hidden"
          >
            <div className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -bottom-50 -left-50 blur-[150px] opacity-[0.1]`}></div>
            <div className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -top-50 -right-50 blur-[150px] opacity-[0.1]`}></div>
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
                  <span><img src="/images/homeImages/check.svg" alt="check" /></span>Daily Rewards
                </p>
                <p>$3,800.00</p>
              </li>
              <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
                <p className="flex items-center gap-2">
                  <span><img src="/images/homeImages/check.svg" alt="check" /></span>Total Earnings
                </p>
                <p>$3,800.00</p>
              </li>
              <li className="flex justify-between border border-[#ffffff0d] p-2 rounded-lg">
                <p className="flex items-center gap-2">
                  <span><img src="/images/homeImages/check.svg" alt="check" /></span>Matured Amount
                </p>
                <p>$3,800.00</p>
              </li>
            </ul>

            <button className="card-btn">
                Invest Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
