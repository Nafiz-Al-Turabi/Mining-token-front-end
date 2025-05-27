"use client";
import ConfigurableTable, { TableColumn } from "@/components/ui/Tables/ConfigurableTable/ConfigurableTable";
import React from "react";

const OverviewTable = () => {
  const formatStatus = (status: string) => {
    const lowerStatus = status.toLowerCase();
    let text = "";
    let className = "";

    switch (lowerStatus) {
      case "pending":
        text = "Pending Payment";
        className = "bg-[#FF00041A] text-[#FF0004]";
        break;
      case "paid":
        text = "Paid";
        className = "bg-[#00E8891A] text-[#22C55E]";
        break;
      default:
        text = status;
        className = "bg-gray-200 text-gray-700";
    }

    return (
      <span className={`px-4 py-2 rounded-md text-xs font-medium ${className}`}>
        {text}
      </span>
    );
  };

  const rawData = [
    {
      orderNo: "1234567890",
      name: "John Doe",
      amount: 100,
      number: 1234567890,
      created_at: "2021-01-01 12:00:00",
      status: "pending",
    },
    {
      orderNo: "1234567891",
      name: "Jane Doe",
      amount: 200,
      number: 9876543210,
      created_at: "2021-01-02 13:00:00",
      status: "paid",
    },
  ];

  // Modify status before passing to table
  const formattedData = rawData.map((item) => ({
    ...item,
    status: formatStatus(item.status),
  }));

  const columns: TableColumn[] = [
    { key: "orderNo", label: "Order No.", type: "text" },
    { key: "name", label: "Name", type: "text" },
    { key: "amount", label: "Amount", type: "number" },
    { key: "number", label: "Number", type: "number" },
    { key: "created_at", label: "Join Date & Time", type: "text" },
    { key: "status", label: "Status", type: "text" },
  ];

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold pb-4">The Ongoing Plan</h1>
      <ConfigurableTable columns={columns} data={formattedData} loading={false} />
    </div>
  );
};

export default OverviewTable;
