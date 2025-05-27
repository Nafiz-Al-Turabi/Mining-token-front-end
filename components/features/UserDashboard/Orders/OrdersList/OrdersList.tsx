"use client";
import ConfigurableTable, {
  TableColumn,
} from "@/components/ui/Tables/ConfigurableTable/ConfigurableTable";
import React from "react";

const OrdersList = () => {

    const formatStatus = (status: string) => {
        const lowerStatus = status.toLowerCase();
        let text = "";
        let className = "";
    
        switch (lowerStatus) {
          case "pending":
            text = "Pending";
            className = "bg-[#fffb001a] text-[#fffb00]";
            break;
          case "completed":
            text = "Completed";
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

      const amountFormatter = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(amount);
      }


    const rawData=[ 
        {
            orderNo: "URDH17464808424702",
            name: "Free daily",
            period: "1 month",
            amount: 30.00000000,
            countdown: 10,
            status: "pending",
        },
        {
            orderNo: "URDH17464838424702",
            name: "Free daily",
            period: "1 day",
            amount: 60.00000000,
            countdown: 10,
            status: "pending",
        },
        {
            orderNo: "URDH17464808424752",
            name: "Free daily",
            period: "7 days",
            amount: 50.00000000,
            countdown: 10,
            status: "completed",
        },
    ]

    const formattedData = rawData.map((item)=>({
        ...item,
        status: formatStatus(item.status),
        amount: amountFormatter(item.amount),
    }))
  const columns: TableColumn[] = [
    { key: "orderNo", label: "Order No.", type: "text" },
    { key: "name", label: "Name", type: "text" },
    { key: "period", label: "Period", type: "text" },
    { key: "amount", label: "Amount", type: "number" },
    { key: "countdown", label: "Countdown", type: "number" },
    { key: "status", label: "Status", type: "text" },
  ];

  const tableActions = () => {
    return (
      <div>
        <button className="px-8 py-2 bg-red-600/20 text-red-600 rounded-lg cursor-pointer">Details</button>
      </div>
    );
  };
  return (
    <div>
        <h1 className="text-2xl font-bold pb-4">Orders</h1>
      <ConfigurableTable
        columns={columns}
        data={formattedData}
        actions={tableActions}
      />
    </div>
  );
};

export default OrdersList;

