import ConfigurableTable, { TableColumn } from '@/components/ui/Tables/ConfigurableTable/ConfigurableTable';
import React from 'react';

const ReferralRewardsLists = () => {
    const rawData = [
        {email:"test@test.com", join_date:"2021-01-01", prev_date:"2021-01-01"},
        {email:"test@test.com", join_date:"2021-01-01", prev_date:"2021-01-01"},
        {email:"test@test.com", join_date:"2021-01-01", prev_date:"2021-01-01"},
    ]
    const columns: TableColumn[] = [
        {key:"email", label:"Email", type:"text"},
        {key:"join_date", label:"Join Date", type:"text"},
        {key:"prev_date", label:"Previous Date", type:"text"},
    ]

    return (
        <div>
            <h1 className="text-2xl font-bold pb-4">Referral Log</h1>
            <ConfigurableTable
                columns={columns}
                data={rawData}
            />
        </div>
    );
};

export default ReferralRewardsLists;