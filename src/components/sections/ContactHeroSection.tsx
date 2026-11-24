import '../../styles/contact-hero.css'
import { contactDetails } from '../../data/contact.ts'
import {
  ArrowRightIcon,
  GrainIcon,
  MailIcon,
  PhoneIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

function ContactHeroSection() {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <img
        className="contact-hero__image"
        src="/images/home/shri-dealer-cta-bg.jpeg"
        alt="Long-grain Basmati rice in a brass bowl with paddy stalks, set against sunlit rice fields."
        width={1983}
        height={793}
        fetchPriority="high"
        decoding="async"
      />

      <div className="contact-hero__veil" aria-hidden="true" />

      <PaddyIllustration className="contact-hero__motif contact-hero__motif--top" />
      <PaddyIllustration className="contact-hero__motif contact-hero__motif--bottom" />

      <svg
        className="contact-hero__contours"
        viewBox="0 0 640 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M-10 28C80 12 160 48 250 36S420 8 520 28 680 52 700 40" />
        <path d="M-10 58C90 42 180 78 280 62S460 30 560 55 680 88 700 72" />
        <path d="M-10 88C100 72 200 105 310 90S500 58 600 88 680 110 700 100" />
      </svg>

      <div className="contact-hero__copy">
        <p className="contact-hero__eyebrow">
          <GrainIcon className="contact-hero__eyebrow-icon" />
          Get in Touch
        </p>

        <h1 id="contact-hero-title" className="contact-hero__title">
          <span className="contact-hero__title-line">Let’s Start a</span>{' '}
          <span className="contact-hero__title-line contact-hero__title-line--accent">
            Conversation.
          </span>
        </h1>

        <p className="contact-hero__lead">
          We’d love to hear from you. Whether you have a question about our
          products, want to explore a partnership, or simply want to get in
          touch — our team is here to help.
        </p>

        <div className="contact-hero__actions">
          <a
            className="button button--primary contact-hero__cta"
            href={contactDetails.phone.href}
          >
            <PhoneIcon />
            Call Us
            <ArrowRightIcon />
          </a>
          <a
            className="button button--secondary contact-hero__cta"
            href="#contact-form"
          >
            <MailIcon />
            Email Us
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactHeroSection
