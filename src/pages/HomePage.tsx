import DealerCtaSection from '../components/sections/DealerCtaSection.tsx'
import FamilyStorySection from '../components/sections/FamilyStorySection.tsx'
import HeroSection from '../components/sections/HeroSection.tsx'
import JourneySection from '../components/sections/JourneySection.tsx'
import QualityStory from '../components/sections/QualityStory.tsx'
import RiceCollection from '../components/sections/RiceCollection.tsx'
import ShriDifferenceSection from '../components/sections/ShriDifferenceSection.tsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <QualityStory />
      <RiceCollection />
      <FamilyStorySection />
      <JourneySection />
      <ShriDifferenceSection />
      <DealerCtaSection />
    </>
  )
}

export default HomePage
