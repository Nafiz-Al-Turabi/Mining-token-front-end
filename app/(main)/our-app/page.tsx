import React from 'react'
import OurAppHero from '@/components/features/OurApp/OurAppHero/OurAppHero'
import DiscoverFeatures from '@/components/features/OurApp/DiscoverFeatures/DiscoverFeatures'
import CalltoAction from '@/components/features/OurApp/CalltoAction/CalltoAction'
export default function OurAppPage () {
  return (
    <div className='fade-in'>
        <OurAppHero />
        <DiscoverFeatures />
        <CalltoAction />
    </div>
  )
}
