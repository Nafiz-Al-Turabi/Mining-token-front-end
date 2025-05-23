import Plans from '@/components/features/Plans/Plans/Plans'
import PlansHero from '@/components/features/Plans/PlansHero/PlansHero'
import React from 'react'

export default function PlansPage() {
  return (
    <div className='fade-in'>
        <PlansHero />
        <Plans />
    </div>
  )
}
