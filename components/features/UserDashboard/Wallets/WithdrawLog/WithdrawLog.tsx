import ConfigurableTable, { TableColumn } from '@/components/ui/Tables/ConfigurableTable/ConfigurableTable';
import React from 'react';

const WithdrawLog = () => {

    const formatStatus = (status:string) => {
        const lowerStatus = status.toLowerCase();
        let text= "";
        let className = "";

        switch(lowerStatus){
            case "pending":
                text = "Pending Payment";
                className = "bg-[#FF00041A] text-[#FF0004]";
                break;
            case "paid":
                text = "Passed";
                className = "bg-[#00E8891A] text-[#22C55E]";
                break;
            default:     
        }

        return (
            <span className={`px-4 py-2 rounded-md text-xs font-medium ${className}`}>
                {text}
            </span>
        )
       
    }



    const data = [
        {
            created_at: "2021-01-01",
            orderNo: "1234567890",
            amount: 1000,
            payment: "Bank Transfer",
            status: "paid",
        }
    ]

    const formattedData = data.map((item) => ({
        ...item,
        status: formatStatus(item.status),
    }));

    const columns: TableColumn[] = [
        { key: "created_at", label: "Join Date & Time", type: "text" },
        { key: "orderNo", label: "Order No.", type: "text" },
        { key: "amount", label: "Amount", type: "number" },
        { key: "payment", label: "Payment", type: "text" },
        { key: "status", label: "Status", type: "text" },
    ];
    return (
        <div className='mt-6'>
            <h1 className='text-2xl font-bold pb-4'>Withdraw Log</h1>
            <ConfigurableTable columns={columns} data={formattedData} loading={false} />
        </div>
    );
};

export default WithdrawLog;