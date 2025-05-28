"use client";
import noice from "@/public/noice.jpg";

import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Mon", deposit: 0, withdraw: 80 },
  { name: "Tue", deposit: 200, withdraw: 150 },
  { name: "Wed", deposit: 250, withdraw: 180 },
  { name: "Thu", deposit: 380, withdraw: 200 },
  { name: "Fri", deposit: 180, withdraw: 120 },
  { name: "Sat", deposit: 220, withdraw: 160 },
  { name: "Sun", deposit: 100, withdraw: 90 },
];

const WalletChart = () => {
  return (
    <div className="relative w-full  mx-auto">
      <Card style={{
        backgroundImage: `linear-gradient(180deg, #010101f3 81.09%, #010101f3 100%), url(${noice.src})`,
      }} className="relative z-10 bg-[#0f0f0f] bg-cover bg-center bg-no-repeat text-white border-none  rounded-2xl overflow-hidden">
        <div
        className={`h-[348px] w-[348px] bg-[#00E889] rounded-full absolute -bottom-40 -right-10 blur-[150px] opacity-[0.05] `}
      />
        <div
        className={`h-[348px] w-[348px] bg-[#00E889] rounded-full absolute -top-40 -left-10 blur-[150px] opacity-[0.05] `}
      />
        <CardContent className="p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-semibold">Data</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FF7F] rounded-full"></div>
                <div className="text-xs md:text-base text-gray-400">Deposit</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2529D8] rounded-full"></div>
                <div className="text-xs md:text-base text-gray-400">
                  Withdraw money
                </div>
              </div>
            </div>
            <select name="" id="" className="bg-[#00E889]/20 rounded-full focus:outline-none px-2 py-1 text-gray-400">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              {/* Gradient Definitions */}
              <defs>
                <linearGradient
                  id="depositGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#00FF7F" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#00FF7F" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="withdrawGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2529D8" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#2529D8" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#2c2c2c" />
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
                      {payload.map((entry, i) => (
                        <p
                          key={i}
                          className={`flex items-center gap-1 ${
                            entry.name === "deposit"
                              ? "text-green-400"
                              : "text-[#2529D8]"
                          }`}
                        >
                          <span className="text-2xl">•</span>
                          {entry.name === "deposit" ? "Deposit" : "Withdraw"}: $
                          {entry.value}
                        </p>
                      ))}
                    </div>
                  ) : null
                }
              />

              {/* Area fills */}
              <Area
                type="monotone"
                dataKey="deposit"
                stroke="none"
                fill="url(#depositGradient)"
              />
              <Area
                type="monotone"
                dataKey="withdraw"
                stroke="none"
                fill="url(#withdrawGradient)"
              />

              {/* Lines */}
              <Line
                type="monotone"
                dataKey="deposit"
                stroke="#00FF7F"
                strokeWidth={2}
                dot={{ fill: "#00FF7F" }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="withdraw"
                stroke="#2529D8"
                strokeWidth={2}
                dot={{ fill: "#2529D8" }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletChart;
