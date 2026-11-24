import type { ReactNode } from 'react'
import '../../styles/dealer-process.css'
import {
  GrainIcon,
  HandshakeIcon,
  MailIcon,
  PeopleIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Step {
  id: string
  number: string
  title: ReactNode
  description: string
  icon: ReactNode
  href?: string
}

const steps: Step[] = [
  {
    id: 'enquire',
    number: '01',
    title: 'Send an Enquiry',
    description:
      'Share a few details about your business and location using our enquiry form.',
    icon: <MailIcon />,
    href: '#dealer-enquiry',
  },
  {
    id: 'connect',
    number: '02',
    title: (
      <>
        Connect With
        <br />
        Our Team
      </>
    ),
    description:
      'Our team will get in touch to understand your requirements and discuss the next steps.',
    icon: <PeopleIcon />,
  },
  {
    id: 'partner',
    number: '03',
    title: (
      <>
        Start the
        <br />
        Partnership
      </>
    ),
    description:
      'Once the details are aligned, you can begin your partnership with Shri Shri.',
    icon: <HandshakeIcon />,
  },
]

const products = [
  {
    id: 'classic-26kg',
    src: '/images/products/classic-26kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 26 kg pack',
    width: 1161,
    height: 1355,
  },
  {
    id: 'xxxl-26kg',
    src: '/images/products/xxxl-26kg.jpeg',
    alt: 'Shri Shri XXXL Basmati Rice 26 kg pack',
    width: 1149,
    height: 1369,
  },
  {
    id: 'classic-1kg',
    src: '/images/products/classic-1kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 1 kg pack',
    width: 1086,
    height: 1448,
  },
] as const

function StepVisual({ id }: { id: string }) {
  if (id === 'enquire') {
    return (
      <img
        className="dealer-process__photo dealer-process__photo--enquire"
        src="/images/quality/quality-inspection-hero.jpeg"
        alt=""
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
      />
    )
  }

  if (id === 'connect') {
    return (
      <img
        className="dealer-process__photo dealer-process__photo--connect"
        src="/images/home/family-meal.jpeg"
        alt=""
        width={1536}
        height={1024}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div className="dealer-process__scene dealer-process__scene--partner">
      <span className="dealer-process__crates" aria-hidden="true" />
      <span className="dealer-process__shelf" aria-hidden="true" />

      {products.map((product) => (
        <div
          key={product.id}
          className={`dealer-process__product dealer-process__product--${product.id}`}
        >
          <span className="dealer-process__contact" aria-hidden="true" />
          <img
            className="dealer-process__product-image"
            src={product.src}
            alt={product.alt}
            width={product.width}
            height={product.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  )
}

function DealerProcessSection() {
  return (
    <section className="dealer-process" aria-labelledby="dealer-process-title">
      <PaddyIllustration className="dealer-process__motif dealer-process__motif--left" />
      <PaddyIllustration className="dealer-process__motif dealer-process__motif--right" />

      <svg
        className="dealer-process__contours"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M-20 40C120 18 240 70 380 55S620 10 760 38 980 80 1220 48" />
        <path d="M-20 78C140 55 280 110 430 88S700 40 860 72 1040 120 1220 90" />
        <path d="M-20 120C160 98 300 150 460 130S740 85 900 118 1080 160 1220 135" />
        <path d="M-20 165C180 145 320 190 490 172S780 130 940 165 1100 200 1220 180" />
      </svg>

      <div className="dealer-process__grains" aria-hidden="true">
        <GrainIcon className="dealer-process__grain dealer-process__grain--1" />
        <GrainIcon className="dealer-process__grain dealer-process__grain--2" />
        <GrainIcon className="dealer-process__grain dealer-process__grain--3" />
      </div>

      <div className="dealer-process__inner">
        <header className="dealer-process__header">
          <p className="dealer-process__eyebrow">
            <GrainIcon className="dealer-process__eyebrow-icon" />
            How to Become a Dealer
          </p>

          <h2 id="dealer-process-title" className="dealer-process__title">
            <span className="dealer-process__title-line">A Simple Process</span>{' '}
            <span className="dealer-process__title-line dealer-process__title-line--accent">
              to Get Started.
            </span>
          </h2>

          <p className="dealer-process__lead">
            Tell us about your business and our team will guide you through the
            next steps.
          </p>
        </header>

        <div className="dealer-process__journey">
          <span className="dealer-process__connector" aria-hidden="true" />

          <ol className="dealer-process__steps">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`dealer-process__step dealer-process__step--${step.id}`}
              >
                <div className="dealer-process__arch">
                  <StepVisual id={step.id} />
                </div>

                <span className="dealer-process__number" aria-hidden="true">
                  {step.number}
                </span>

                {step.href ? (
                  <a
                    className="dealer-process__seal"
                    href={step.href}
                    aria-label="Go to dealer enquiry form"
                  >
                    {step.icon}
                  </a>
                ) : (
                  <span className="dealer-process__seal" aria-hidden="true">
                    {step.icon}
                  </span>
                )}

                <div className="dealer-process__meta">
                  <h3 className="dealer-process__step-title">{step.title}</h3>
                  <p className="dealer-process__step-text">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default DealerProcessSection
