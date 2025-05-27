import ConfigurableTable, { TableColumn } from "@/components/ui/Tables/ConfigurableTable/ConfigurableTable";
import React from "react";

const WalletsList = () => {
    const data = [
        { symbol: "BTC", address: "1234567890" },
        { symbol: "ETH", address: "1234567890" },
        { symbol: "BTC", address: "1234567890" },
        { symbol: "ETH", address: "1234567890" },
    ]
    const columns: TableColumn[] = [
        { key: "symbol", label: "Symbol", type: "text" },
        { key: "address", label: "Address", type: "text" }, 
      ];
  return (
    <div className="mt-6">
      <ConfigurableTable columns={columns} data={data} />
    </div>
  );
};

export default WalletsList;
