import DealerEnquirySection from '../components/sections/DealerEnquirySection.tsx'
import DealerProcessSection from '../components/sections/DealerProcessSection.tsx'
import DealersHeroSection from '../components/sections/DealersHeroSection.tsx'
import WhyPartnerSection from '../components/sections/WhyPartnerSection.tsx'

function DealersPage() {
  return (
    <>
      <DealersHeroSection />
      <WhyPartnerSection />
      <DealerProcessSection />
      <DealerEnquirySection />
    </>
  )
}

export default DealersPage
