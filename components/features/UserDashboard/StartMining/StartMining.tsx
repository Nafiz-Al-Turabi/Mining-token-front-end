import PlanCard from '@/components/ui/Cards/PlanCard';
import React from 'react';

const StartMining = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
            <PlanCard soldOut={true}/>
            <PlanCard soldOut={false}/>
            <PlanCard soldOut={false}/>
            <PlanCard soldOut={true}/>
            <PlanCard soldOut={false}/>
            <PlanCard soldOut={false}/>
            <PlanCard soldOut={true}/>
            <PlanCard soldOut={false}/>
        </div>
    );
};

export default StartMining;