import ConfigurableTable, { TableColumn } from '@/components/ui/Tables/ConfigurableTable/ConfigurableTable';
import React from 'react';

const ProfitList = () => {

    const amountFormatter = (amount: number) => {
        if(amount){
            return <span>-${amount}</span>
        }
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });

    }

    const rawData=[
            {
                create_at: "2021-01-01 12:00:00",
                type: "User withdrawal",
                amount: 100,
                balance: 100,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 200,
                balance: 2000,
            },
            {
                create_at: "2021-01-01 12:00:00",
                type: "User Withdrawal",
                amount: 20,
                balance: 100,
            }
    ]

    const formattedData = rawData.map((item)=>({
        ...item,
        amount: amountFormatter(item.amount),
        balance: amountFormatter(item.balance),
    }))
    const columns: TableColumn[] = [
        { key: "create_at", label: "Create Date", type: "text" },
        { key: "type", label: "Type", type: "text" },
        { key: "amount", label: "Amount", type: "number" },
        { key: "balance", label: "Balance", type: "number" },
      ];
    
    return (
        <div>
            <h1 className="text-2xl font-bold pb-4">Profit</h1>
            <ConfigurableTable columns={columns} data={formattedData} />
        </div>
    );
};

export default ProfitList;