import SettingWallet from '@/components/features/UserDashboard/Wallets/SettingWallet/SettingWallet'
import WalletsList from '@/components/features/UserDashboard/Wallets/WalletsList/WalletsList'
import React from 'react'

export default function SettingWalletPage() {
  return (
    <div className='fade-in'>
        <SettingWallet/>
        <WalletsList/>
    </div>
  )
}
