import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/contact-help.css'
import {
  ArrowRightIcon,
  BowlIcon,
  GrainIcon,
  HandshakeIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface HelpPath {
  number: string
  icon: ReactNode
  title: ReactNode
  description: string
  cta: string
  href: string
  external?: boolean
}

const paths: HelpPath[] = [
  {
    number: '01',
    icon: <GrainIcon />,
    title: (
      <>
        General
        <br />
        Enquiries
      </>
    ),
    description:
      'Have a question about Shri Shri, our products, or simply want to know more about us?',
    cta: 'Get in Touch',
    href: '#contact-form',
  },
  {
    number: '02',
    icon: <BowlIcon />,
    title: (
      <>
        Product
        <br />
        Enquiries
      </>
    ),
    description:
      'Need information about our Classic or XXXL Basmati Rice range, pack sizes, or product availability?',
    cta: 'Ask About Our Products',
    href: '#contact-form',
  },
  {
    number: '03',
    icon: <HandshakeIcon />,
    title: (
      <>
        Dealership
        <br />
        Enquiries
      </>
    ),
    description:
      'Interested in becoming a Shri Shri dealer or exploring a partnership? Start your enquiry with us.',
    cta: 'Become a Dealer',
    href: '/dealers#dealer-enquiry',
    external: true,
  },
]

function ContactHelpSection() {
  return (
    <section className="contact-help" aria-labelledby="contact-help-title">
      <PaddyIllustration className="contact-help__motif contact-help__motif--left" />
      <PaddyIllustration className="contact-help__motif contact-help__motif--right" />

      <div className="contact-help__grains" aria-hidden="true">
        <GrainIcon className="contact-help__grain contact-help__grain--1" />
        <GrainIcon className="contact-help__grain contact-help__grain--2" />
        <GrainIcon className="contact-help__grain contact-help__grain--3" />
      </div>

      <div className="contact-help__landscape" aria-hidden="true">
        <span className="contact-help__hill contact-help__hill--far" />
        <span className="contact-help__hill contact-help__hill--near" />
        <span className="contact-help__palms" />
        <svg
          className="contact-help__contours"
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path d="M-20 36C140 18 280 70 430 52S720 12 880 40 1080 78 1220 48" />
          <path d="M-20 72C160 52 320 105 480 82S780 38 940 70 1100 110 1220 88" />
          <path d="M-20 112C180 92 340 140 520 118S820 75 980 112 1120 150 1220 128" />
          <path d="M-20 148C200 130 360 168 540 150S860 115 1020 148 1140 172 1220 160" />
        </svg>
      </div>

      <div className="contact-help__inner">
        <header className="contact-help__header">
          <p className="contact-help__eyebrow">
            <GrainIcon className="contact-help__eyebrow-icon" />
            How Can We Help?
          </p>

          <h2 id="contact-help-title" className="contact-help__title">
            <span className="contact-help__title-line">Whatever You Need,</span>{' '}
            <span className="contact-help__title-line contact-help__title-line--accent">
              We’re Here to Help.
            </span>
          </h2>

          <p className="contact-help__lead">
            From product information to partnership enquiries, our team is here
            to help you find the right next step.
          </p>
        </header>

        <ul className="contact-help__paths">
          {paths.map((path, index) => (
            <li key={path.number} className="contact-help__path">
              {index > 0 ? (
                <span className="contact-help__separator" aria-hidden="true">
                  <GrainIcon className="contact-help__separator-icon" />
                </span>
              ) : null}

              <span className="contact-help__number" aria-hidden="true">
                {path.number}
              </span>

              <span className="contact-help__seal" aria-hidden="true">
                {path.icon}
              </span>

              <h3 className="contact-help__path-title">{path.title}</h3>
              <p className="contact-help__path-text">{path.description}</p>

              {path.external ? (
                <Link to={path.href} className="contact-help__cta">
                  {path.cta}
                  <ArrowRightIcon />
                </Link>
              ) : (
                <a href={path.href} className="contact-help__cta">
                  {path.cta}
                  <ArrowRightIcon />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactHelpSection
