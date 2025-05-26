import ServerIcon from "@/components/icons/ServerIcon";
import Image from "next/image";

const CompanyRegistration = () => {
  return (
    <div className="bg-[#000503] py-25 px-4 relative z-10">
      {/* Illustration */}
      <img
        src="/images/aboutUs/Group (8).svg"
        alt="Company Registration"
        className="hidden lg:block absolute top-0 left-0 "
      />
      <img
        src="/images/aboutUs/Group (9).svg"
        alt="Company Registration"
        className="hidden lg:block absolute -top-20 right-0 "
      />
      <div className="bg-[#0b0b0b] max-w-[1320px] mx-auto bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row  items-center rounded-3xl overflow-hidden relative border-b border-[#00E889]/20 ">
        <div
          className={`h-[686px] w-[686px] bg-[#0d1f18] rounded-full absolute -bottom-80 lg:top-1/2 lg:-translate-y-1/2 lg:right-40 blur-[50px]  `}
        ></div>
        <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>

        <Image
          src="/images/aboutUs/register.png"
          alt="Company Registration"
          height={600}
          width={600}
          className="w-full lg:w-[40%] lg:h-[400px] xl:h-auto object-cover xl:w-[40%]"
        />
        <div className="p-4 lg:pr-4 relative z-20">
          <h1 className="text-[1.5rem] sm:text-[3rem] xl:text-[4rem] font-semibold  mb-4 lg:mb-6">
            Company{" "}
            <span className="bg-gradient-to-l from-[#078854] to-[#00E889] bg-clip-text text-transparent">
              Registration
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6">
            Integrity, reliability, transparency, flexibility and communication
            should be thecore values of any company that works in the field of
            investment attraction.HEXminer adheres to absolutely all of these
            values so that our clients can haveconfidence and trust in us.
          </p>
          <h3 className="flex items-center gap-2 text-base lg:text-xl font-normal">
            {" "}
            <span className="p-2 rounded-md border border-[#424242] bg-[#00E889]/5">
              <ServerIcon />
            </span>{" "}
            145 City Rd, London, United Kingdom,EC1V 1AZ
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;
