import React from 'react'
import OurAppHero from '@/components/features/OurApp/OurAppHero/OurAppHero'
import DiscoverFeatures from '@/components/features/OurApp/DiscoverFeatures/DiscoverFeatures'

export default function OurAppPage () {
  return (
    <div className='fade-in'>
        <OurAppHero />
        <DiscoverFeatures />
    </div>
  )
}
