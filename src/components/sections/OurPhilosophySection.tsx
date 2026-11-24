import type { ReactNode } from 'react'
import '../../styles/our-philosophy.css'
import CountrysideLineArt from '../ui/CountrysideLineArt.tsx'
import {
  BowlIcon,
  GrainIcon,
  HandSproutIcon,
  LeafIcon,
  ShieldIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Principle {
  icon: ReactNode
  title: [string, string]
  description: [string, string]
}

const principles: Principle[] = [
  {
    icon: <LeafIcon />,
    title: ['Purity', 'At the Core'],
    description: ['Naturally grown,', 'carefully processed.'],
  },
  {
    icon: <HandSproutIcon />,
    title: ['Respect', 'For Farmers'],
    description: ['Supporting the people', 'who make it possible.'],
  },
  {
    icon: <BowlIcon />,
    title: ['Authentic', 'Taste'],
    description: ['The natural aroma', 'and richness you love.'],
  },
  {
    icon: <ShieldIcon />,
    title: ['A Healthier', 'Tomorrow'],
    description: ['Wholesome grains', 'for a better you.'],
  },
]

const QUOTE_WORDS = ['Good', 'Rice', 'Builds', 'Brighter', 'Tomorrows']

function OurPhilosophySection() {
  return (
    <section className="philosophy" aria-labelledby="philosophy-title">
      <CountrysideLineArt className="philosophy__countryside" />

      <div className="philosophy__inner">
        <div className="philosophy__content">
          <p className="philosophy__eyebrow">
            <GrainIcon className="philosophy__eyebrow-icon" />
            Our Philosophy
          </p>

          <h2 id="philosophy-title" className="philosophy__title">
            <span className="philosophy__title-line">More Than Just Rice</span>{' '}
            <span className="philosophy__title-line philosophy__title-line--accent">
              A Promise We Carry Forward
            </span>
          </h2>

          <p className="philosophy__lead">
            At Shri Shri, we believe rice is more than a grain — it is a connection
            to our roots, our farmers and the rich heritage of our land. Our
            philosophy is simple: to deliver Basmati rice that is pure, honest
            and worthy of your trust.
          </p>

          <ul className="philosophy__principles">
            {principles.map((principle) => (
              <li key={principle.title.join(' ')} className="philosophy__principle">
                <span className="philosophy__seal" aria-hidden="true">
                  {principle.icon}
                </span>
                <div>
                  <h3 className="philosophy__principle-title">
                    <span>{principle.title[0]}</span>{' '}
                    <span>{principle.title[1]}</span>
                  </h3>
                  <p className="philosophy__principle-text">
                    <span>{principle.description[0]}</span>{' '}
                    <span>{principle.description[1]}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="philosophy__visual">
          <PaddyIllustration className="philosophy__motif philosophy__motif--left" />
          <PaddyIllustration className="philosophy__motif philosophy__motif--top" />
          <PaddyIllustration className="philosophy__motif philosophy__motif--bottom" />

          <span className="philosophy__backdrop-arch" aria-hidden="true" />
          <span className="philosophy__arch-outline" aria-hidden="true" />

          <div className="philosophy__arch">
            <img
              className="philosophy__image"
              src="/images/about/our-philosophy-rice.jpeg"
              alt="An engraved brass bowl of long-grain Basmati rice with golden paddy stalks and a wooden scoop, set against rice fields at sunset"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="philosophy__quote-panel">
            <LeafIcon className="philosophy__quote-icon" />
            <span className="philosophy__quote-rule" aria-hidden="true" />
            <p className="philosophy__quote">
              {QUOTE_WORDS.map((word, index) => (
                <span key={word}>
                  {word}
                  {index < QUOTE_WORDS.length - 1 ? ' ' : ''}
                </span>
              ))}
            </p>
            <span className="philosophy__quote-rule" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPhilosophySection
