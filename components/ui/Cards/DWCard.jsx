import noice from "@/public/noice.jpg";
import deposit from "@/public/images/homeImages/deposite.svg";

const DWCard = () => {
    return (
        <div
            className="bg-cover bg-center rounded-xl overflow-hidden relative border-b border-[#00e88744]"
            style={{
                backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
            }}
        >
            <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>
            <div
                className={`h-[300px] w-[300px] bg-[#00E889] rounded-full absolute -bottom-40 left-1/2 -translate-x-1/2 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
            ></div>
            <div className="flex justify-between items-center p-4 space-x-2">
                <img src={deposit.src} alt="" />
                <div>
                    <p className="text-lg md:text-xl font-semibold text-white mb-2">
                        nafi*************@gmail.com
                    </p>
                    <button className="btn px-6 py-3 rounded-full text-sm md:text-lg">4.354584 USDT-TRC-20</button>
                </div>
            </div>
        </div>
    );
};

export default DWCard;