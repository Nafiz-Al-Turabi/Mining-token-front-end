"use client";
import noice from "@/public/noice.jpg";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const data = [
  { name: "Mon", reward: 50 },
  { name: "Tue", reward: 100 },
  { name: "Wed", reward: 80 },
  { name: "Thu", reward: 120 },
  { name: "Fri", reward: 90 },
  { name: "Sat", reward: 140 },
  { name: "Sun", reward: 110 },
];

const TrialFundChart = () => {
  return (
    <div className="relative w-full mt-6">
      <Card
        style={{
          backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
        }}
        className="relative z-10 bg-[#0f0f0f] bg-cover text-white border-none  rounded-2xl overflow-hidden"
      >
        <div
          className={`h-[348px] w-[348px] bg-[#00E889] rounded-full absolute -bottom-40 -right-10 blur-[150px] opacity-[0.05] `}
        />
        <div
          className={`h-[348px] w-[348px] bg-[#00E889] rounded-full absolute -top-40 -left-10 blur-[150px] opacity-[0.05] `}
        />
        <CardContent className="p-4 flex ">
          <div className="flex flex-col justify-between gap-3 h-40">
            <div className="">
              <Image
                src="/images/dashboardImages/frame9.svg"
                alt="w-10 h-10"
                width={48}
                height={48}
              />
            </div>
            <div>
              <div className="text-[1.75rem] font-bold mb-1">$50.00</div>
              <div className="text-muted-foreground text-sm">TRIAL FUNDS</div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#2e2e2e"
              />
              <XAxis
                dataKey="name"
                stroke="#999"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#999"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                content={({ active, payload, label }) =>
                  active && payload?.length ? (
                    <div className="bg-[#1c1c1c] text-white p-2 rounded shadow text-sm relative">
                      <div className="h-4 w-4 absolute bg-[#1c1c1c] top-1/2 -translate-y-1/2 -left-2 rotate-45" />
                      <p className="mb-1">{label}</p>
                      <p className="text-green-400 flex items-center gap-1">
                        <span className="text-2xl">•</span>${payload[0].value}
                      </p>
                    </div>
                  ) : null
                }
              />
              <Bar
                dataKey="reward"
                fill="#1A2622"
                radius={[2, 2, 0, 0]}
                barSize={20}
                activeBar={{
                  fill: "#22c55e",
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrialFundChart;
