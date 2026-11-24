import ContactFormSection from '../components/sections/ContactFormSection.tsx'
import ContactHelpSection from '../components/sections/ContactHelpSection.tsx'
import ContactHeroSection from '../components/sections/ContactHeroSection.tsx'
import VisitUsSection from '../components/sections/VisitUsSection.tsx'

function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactHelpSection />
      <ContactFormSection />
      <VisitUsSection />
    </>
  )
}

export default ContactPage
