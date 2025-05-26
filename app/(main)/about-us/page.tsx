import AboutUsHero from '@/components/features/About-us/AboutUsHero/AboutUsHero'
import Roadmap from '@/components/features/About-us/Roadmap/Roadmap'
import CompanyRegistration from '@/components/features/About-us/CompanyRegistration/CompanyRegistration'

export default function AboutUsPage() {
  return (
    <div className='fade-in'>
        <AboutUsHero />
        <CompanyRegistration />
        <Roadmap />
    </div>
  )
}
