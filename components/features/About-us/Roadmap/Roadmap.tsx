"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const roadmapData = [
  {
    title: "Q1 2023",
    subtitle: "Security upgrade",
    description:
      "We accelerated our expansion into AsiaThe platform, expanded payment optionsand South America, boosting brand exposure through collaborations with major enterprises and KOLs, and deepening global partnerships.",
    image: "/images/aboutUs/roadmap.png",
  },
  {
    title: "Q1 2023",
    subtitle: "Security upgrade",
    description:
      "We accelerated our expansion into AsiaThe platform, expanded payment optionsand South America, boosting brand exposure through collaborations with major enterprises and KOLs, and deepening global partnerships.",
    image: "/images/aboutUs/roadmap.png",
  },
  {
    title: "Q1 2023",
    subtitle: "Security upgrade",
    description:
      "We accelerated our expansion into AsiaThe platform, expanded payment optionsand South America, boosting brand exposure through collaborations with major enterprises and KOLs, and deepening global partnerships.",
    image: "/images/aboutUs/roadmap.png",
  },
  {
    title: "Q1 2023",
    subtitle: "Security upgrade",
    description:
      "We accelerated our expansion into AsiaThe platform, expanded payment optionsand South America, boosting brand exposure through collaborations with major enterprises and KOLs, and deepening global partnerships.",
    image: "/images/aboutUs/roadmap.png",
  },
];

export default function Roadmap() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  return (
    <section ref={containerRef} className="pb-20 bg-[#000503] relative">
      <h2 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] mb-20 text-center font-semibold">
        Company <span className="bg-gradient-to-l from-[#00E889] to-[#078854] bg-clip-text text-transparent">Roadmap</span>
      </h2>
      <div className="relative max-w-6xl mx-auto px-4  z-10">
        {/* Timeline line */}
        <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-[10px] bg-gray-300 z-0 overflow-hidden rounded-full">
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-full bg-gradient-to-t from-[#00E889] via-[#067549] to-[#00E889] rounded-full"
          />
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {roadmapData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
     
      <img src="/images/aboutUs/bg-wire3.svg" alt="" className="hidden md:block absolute bottom-0 left-0 " />
      <img src="/images/aboutUs/bg-wire4.svg" alt="" className="hidden md:block absolute bottom-1/3 right-0 " />
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        translateY: [0.95, 1.05, 1],
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
      });
    }
  }, [controls, inView]);

  const isRight = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex items-center w-full ${
        isRight ? "lg:justify-start" : "lg:justify-end"
      } justify-end`}
    >
      {/* Timeline Dot */}
      <div
        style={{
          backgroundImage: ` radial-gradient(50% 50% at 50% 50%, #FFF 0%, #00824D 100%, #00E889 100%)`,
        }}
        className="absolute -left-1 top-2 lg:top-[45%] lg:left-1/2 transform lg:-translate-x-1/2  rounded-full w-8 h-8 z-20"
      />

      <div
        className={` absolute left-14 -top-1 lg:top-[45%] ${
          isRight ? "lg:left-[60%]" : " lg:left-[40%]"
        } w-fit transform lg:-translate-x-1/2 rounded-full `}
      >
        <div className="text-[#00E889] text-2xl font-semibold">
          {item.title}
        </div>
        <div className="text-gray-400 ">{item.subtitle}</div>
      </div>

      <div className="w-full lg:max-w-[450px] xl:max-w-[524px] p-4 rounded-xl shadow-lg bg-[#0c0c0c] text-white flex flex-col gap-3 ml-12 lg:ml-0 relative overflow-hidden border-b border-[#00E889]/50 group mt-24 lg:mt-0">
        <div
          className={`h-[414px] w-[414px] bg-[#00E889] rounded-full absolute -top-40 -right-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
        ></div>
        <div
          className={`h-[414px] w-[300px] bg-[#00E889] rounded-full absolute -bottom-40 -left-40 blur-[150px] opacity-[0.1] group-hover:opacity-[0.2] transition-all duration-300`}
        ></div>
        <div className="h-[2px] w-[70%] bg-gradient-to-l from-[#00E88900] via-[#ffffff] to-[#00E88900] absolute -bottom-[1px] left-1/2 -translate-x-1/2"></div>

        <div className="rounded-lg overflow-hidden relative z-30">
          <Image
            src={item.image}
            alt="Roadmap image"
            width={400}
            height={250}
            className="w-full h-auto object-cover scale-150"
          />
        </div>
        <p className="text-sm lg:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
