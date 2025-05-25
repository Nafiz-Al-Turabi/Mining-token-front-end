import AboutUsHero from '@/components/features/About-us/AboutUsHero/AboutUsHero'
import Roadmap from '@/components/features/About-us/Roadmap/Roadmap'
import React from 'react'

export default function AboutUsPage() {
  return (
    <div className='fade-in'>
        <AboutUsHero />
        <Roadmap />
    </div>
  )
}
