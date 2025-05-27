import DepositLog from '@/components/features/UserDashboard/Wallets/DepositLog/DepositLog'
import WithdrawLog from '@/components/features/UserDashboard/Wallets/WithdrawLog/WithdrawLog'
import WalletMain from '@/components/features/UserDashboard/Wallets/WalletMain/WalletMain'
import React from 'react'
import WalletsDataAndCard from '@/components/features/UserDashboard/Wallets/WalletsDataAndCard/WalletsDataAndCard'

export default function WalletsPage() {
  return (
    <div className='fade-in'>
        <WalletMain />
        <WalletsDataAndCard />
        <DepositLog />
        <WithdrawLog />
    </div>
  )
}