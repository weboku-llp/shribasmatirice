import type { ReactNode, SyntheticEvent } from 'react'
import '../../styles/quality-hero.css'
import {
  BowlIcon,
  GrainIcon,
  LeafIcon,
  ShieldIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Pillar {
  icon: ReactNode
  label: [string, string]
}

const pillars: Pillar[] = [
  { icon: <LeafIcon />, label: ['Carefully', 'Selected'] },
  { icon: <ShieldIcon />, label: ['Thoughtfully', 'Processed'] },
  { icon: <GrainIcon />, label: ['Consistent', 'Quality'] },
  { icon: <BowlIcon />, label: ['Natural', 'Goodness'] },
]

/* Without the inspection photo the hero keeps its cream atmosphere instead
   of showing a broken-image icon; a later successful load restores it. */
function markMissing(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.dataset.missing = 'true'
}

function clearMissing(event: SyntheticEvent<HTMLImageElement>) {
  delete event.currentTarget.dataset.missing
}

function QualityHeroSection() {
  return (
    <section className="quality-hero" aria-labelledby="quality-hero-title">
      <img
        className="quality-hero__image"
        src="/images/quality/quality-inspection-hero.jpeg"
        alt="Long-grain Basmati rice arranged for quality inspection with a magnifying glass."
        width={1774}
        height={887}
        fetchPriority="high"
        onError={markMissing}
        onLoad={clearMissing}
      />

      <PaddyIllustration className="quality-hero__motif" />

      <div className="quality-hero__copy">
        <p className="quality-hero__eyebrow">
          <GrainIcon className="quality-hero__eyebrow-icon" />
          Our Quality
        </p>

        <h1 id="quality-hero-title" className="quality-hero__title">
          <span className="quality-hero__title-line">Purity in</span>{' '}
          <span className="quality-hero__title-line quality-hero__title-line--accent">
            Every Grain.
          </span>
        </h1>

        <p className="quality-hero__lead">
          At Shri Shri, quality is at the heart of everything we do. From careful
          selection to thoughtful processing, every grain is handled with
          attention to purity, consistency and authentic taste.
        </p>
      </div>

      <ul className="quality-hero__pillars">
        {pillars.map((pillar) => (
          <li key={pillar.label.join(' ')} className="quality-hero__pillar">
            <span className="quality-hero__seal" aria-hidden="true">
              {pillar.icon}
            </span>
            <span className="quality-hero__pillar-label">
              <span>{pillar.label[0]}</span>{' '}
              <span>{pillar.label[1]}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QualityHeroSection
