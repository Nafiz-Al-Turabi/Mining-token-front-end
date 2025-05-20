import noice from "@/public/noice.jpg";
import deposit from "@/public/images/homeImages/deposite.svg";

const DWCard = () => {
    return (
        <div
          className="bg-cover bg-center rounded-xl overflow-hidden relative "
          style={{
            backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
          }}
        >
          <div className="flex justify-between items-center p-4 space-x-2">
            <img src={deposit.src} alt="" />
            <div>
              <p className="text-xl font-semibold text-white mb-2">
                nafi*************@gmail.com
              </p>
              <button className="btn btn-primary">4.354584 USDT-TRC-20</button>
            </div>
          </div>
        </div>
    );
};

export default DWCard;