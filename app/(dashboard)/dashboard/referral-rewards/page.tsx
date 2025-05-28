import ReferralRewardsLists from '@/components/features/UserDashboard/ReferralRewards/ReferralRewardsLists/ReferralRewardsLists'
import { ReferralsChart } from '@/components/features/UserDashboard/ReferralRewards/ReferralsChart/ReferralsChart'
import React from 'react'

export default function ReferralRewardsPage() {
  return (
    <div className='fade-in'>
      <ReferralsChart/>
      <ReferralRewardsLists />
    </div>
  )
}
