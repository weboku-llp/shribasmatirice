import '../../styles/visit-us.css'
import { contactDetails } from '../../data/contact.ts'
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  FacebookIcon,
  GrainIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from '../ui/Icons.tsx'

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

const LOOSE_GRAINS = [
  [12, 18, -28],
  [38, 8, 22],
  [58, 28, 48],
  [22, 42, -12],
  [72, 52, 34],
] as const

function VisitUsSection() {
  const addressText = contactDetails.addressLines.join(' ')

  return (
    <section className="visit-us" aria-labelledby="visit-us-title">
      <div className="visit-us__shell">
        <div className="visit-us__copy">
          <PaddyIllustration className="visit-us__motif visit-us__motif--top" />
          <PaddyIllustration className="visit-us__motif visit-us__motif--bottom" />

          <svg
            className="visit-us__grains"
            viewBox="0 0 90 70"
            aria-hidden="true"
            focusable="false"
          >
            {LOOSE_GRAINS.map(([cx, cy, angle]) => (
              <ellipse
                key={`${cx}-${cy}`}
                className="visit-us__grain"
                cx={cx}
                cy={cy}
                rx="3.2"
                ry="1.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            ))}
          </svg>

          <p className="visit-us__eyebrow">
            <GrainIcon className="visit-us__eyebrow-icon" />
            Visit Us
          </p>

          <h2 id="visit-us-title" className="visit-us__title">
            <span className="visit-us__title-line">Come Say Hello</span>
            <span className="visit-us__title-line visit-us__title-line--accent">
              We’d Love to Welcome You.
            </span>
          </h2>

          <p className="visit-us__lead">
            We’re always happy to connect in person. Visit our office to learn
            more about our products, explore opportunities, or simply say hello.
          </p>

          <ul className="visit-us__details">
            <li className="visit-us__detail">
              <span className="visit-us__detail-seal" aria-hidden="true">
                <MapPinIcon />
              </span>
              <span className="visit-us__detail-copy">
                <span className="visit-us__detail-label">Our Address</span>
                <address className="visit-us__detail-value">
                  <span className="visit-us__company">{contactDetails.company}</span>
                  {contactDetails.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </span>
            </li>

            <li className="visit-us__detail">
              <span className="visit-us__detail-seal" aria-hidden="true">
                <PhoneIcon />
              </span>
              <span className="visit-us__detail-copy">
                <span className="visit-us__detail-label">Call Us</span>
                <a
                  href={contactDetails.phone.href}
                  className="visit-us__detail-value visit-us__detail-link"
                >
                  {contactDetails.phone.display}
                </a>
              </span>
            </li>

            <li className="visit-us__detail">
              <span className="visit-us__detail-seal" aria-hidden="true">
                <ExternalLinkIcon />
              </span>
              <span className="visit-us__detail-copy">
                <span className="visit-us__detail-label">Follow Us</span>
                <span className="visit-us__socials">
                  {contactDetails.socials.map((social) => {
                    const Icon = socialIcons[social.id]
                    return (
                      <a
                        key={social.id}
                        href={social.href}
                        className="visit-us__social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon />
                        {social.label}
                      </a>
                    )
                  })}
                </span>
              </span>
            </li>
          </ul>

          <a
            className="button button--primary visit-us__directions"
            href={contactDetails.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SendIcon />
            Get Directions
            <ArrowRightIcon />
          </a>
        </div>

        <div className="visit-us__media">
          <img
            className="visit-us__office"
            src="/images/contact/visit-office.jpeg"
            alt="Shri Shri Basmati Rice office exterior with brand crest on the facade."
            width={1728}
            height={2304}
            loading="lazy"
            decoding="async"
          />

          <a
            className="visit-us__map-card"
            href={contactDetails.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open map for ${contactDetails.company}, ${addressText}`}
          >
            <div className="visit-us__map" aria-hidden="true">
              <svg
                className="visit-us__map-art"
                viewBox="0 0 220 200"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="220" height="200" fill="#f3eee4" />
                <path
                  d="M-10 40C30 20 55 70 90 55s55-50 90-20 55 40 80 18"
                  fill="none"
                  stroke="#c9dff0"
                  strokeWidth="22"
                />
                <path
                  d="M-10 130C40 110 70 155 110 135s60-55 100-25 50 45 70 28"
                  fill="none"
                  stroke="#d7e8f4"
                  strokeWidth="14"
                />
                <path
                  d="M35 0v200M85 0v200M140 0v200M185 0v200"
                  fill="none"
                  stroke="#ddd2bc"
                  strokeWidth="1.1"
                />
                <path
                  d="M0 45h220M0 95h220M0 145h220"
                  fill="none"
                  stroke="#ddd2bc"
                  strokeWidth="1.1"
                />
                <path
                  d="M0 70C50 55 90 95 130 78s55-40 90-18"
                  fill="none"
                  stroke="#e4d7c0"
                  strokeWidth="5"
                />
                <circle cx="118" cy="92" r="22" fill="rgb(156 116 52 / 0.16)" />
                <path
                  d="M118 68c-11 0-20 8.8-20 19.8 0 14.8 20 34.2 20 34.2s20-19.4 20-34.2c0-11-9-19.8-20-19.8Z"
                  fill="#9c7434"
                />
                <circle cx="118" cy="87" r="6.5" fill="#fffefb" />
              </svg>
            </div>

            <div className="visit-us__map-meta">
              <div className="visit-us__map-copy">
                <span className="visit-us__map-name">{contactDetails.company}</span>
                <span className="visit-us__map-address">{addressText}</span>
              </div>
              <span className="visit-us__map-external-seal" aria-hidden="true">
                <ExternalLinkIcon className="visit-us__map-external" />
              </span>
            </div>
          </a>
        </div>
      </div>

      <aside className="visit-us__banner" aria-labelledby="visit-us-banner-title">
        <img
          className="visit-us__banner-image"
          src="/images/about/about-hero-bg.jpeg"
          alt=""
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <span className="visit-us__banner-veil" aria-hidden="true" />

        <div className="visit-us__banner-inner">
          <GrainIcon className="visit-us__banner-icon" />
          <div className="visit-us__banner-copy">
            <p id="visit-us-banner-title" className="visit-us__banner-title">
              Have a question before you visit?
            </p>
            <p className="visit-us__banner-lead">
              Our team is happy to assist you with any information you may need.
            </p>
          </div>
          <a
            className="button button--secondary visit-us__banner-cta"
            href="#contact-form"
          >
            <MailIcon />
            Get in Touch
            <ArrowRightIcon />
          </a>
        </div>
      </aside>
    </section>
  )
}

export default VisitUsSection
