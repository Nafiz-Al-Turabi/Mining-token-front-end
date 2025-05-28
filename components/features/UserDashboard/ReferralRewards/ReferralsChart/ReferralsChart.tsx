"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import noice from "@/public/noice.jpg";

const data = [
  { name: "Mon", value: 0 },
  { name: "Tue", value: 100 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 50 },
  { name: "Fri", value: 280 },
  { name: "Sat", value: 70 },
  { name: "Sun", value: 60 },
];

export function ReferralsChart() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }}
      className="bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden relative"
    >
      <div
        className={`h-[348px] w-[348px] bg-[#00E889] rounded-full absolute -bottom-40 left-1/2 -translate-x-1/2 blur-[150px] opacity-[0.05] `}
      ></div>
      <Card className="bg-[#0f0f0f00] text-white border-none shadow-md">
        <CardContent className="flex flex-row justify-between items-center px-4 lg:px-6 py-4">
          {/* Left side content */}
          <div className="flex flex-col justify-between gap-3 h-40">
            <div className="">
              <Image
                src="/images/dashboardImages/frame2.svg"
                alt="w-10 h-10"
                width={40}
                height={40}
              />
            </div>
            <div>
              <div className="text-[1.75rem] font-bold">$50.00</div>
              <div className="text-muted-foreground text-sm">
                Total Referrals
              </div>
            </div>
            <div className="flex items-center gap-1 bg-green-700/20 text-green-400 text-xs px-2 py-1 rounded-full w-fit">
              <TrendingUp className="w-3 h-3" /> 25%
            </div>
          </div>

          {/* Chart */}
          <div className="w-full h-40 sm:w-2/3">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data}>
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid vertical strokeDasharray="3 3" stroke="#333" />
                <XAxis
                  dataKey="name"
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  content={({ active, payload, label }) =>
                    active && payload?.length ? (
                      <div className="bg-[#1c1c1c] text-white p-2 rounded shadow text-sm">
                        <p>{label}</p>
                        <p className="text-green-400 flex items-center gap-1">
                          <span className="text-2xl">•</span>${payload[0].value}
                        </p>
                      </div>
                    ) : null
                  }
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="none"
                  fill="url(#lineGradient)"
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ fill: "#22c55e" }}
                  activeDot={{ r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
