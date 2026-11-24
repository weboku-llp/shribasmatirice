import type { ReactNode } from 'react'
import '../../styles/quality-standard.css'
import { AromaIcon, GrainIcon, LeafIcon } from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <GrainIcon />,
    title: 'Long Grains',
    description: 'Distinctive grains with an elegant appearance.',
  },
  {
    icon: <AromaIcon />,
    title: 'Natural Aroma',
    description: 'The characteristic aroma associated with Basmati rice.',
  },
  {
    icon: <LeafIcon />,
    title: 'Consistent Quality',
    description: 'Selected with attention to quality and consistency.',
  },
]

function QualityStandardSection() {
  return (
    <section
      className="quality-standard"
      aria-labelledby="quality-standard-title"
    >
      <div className="quality-standard__visual">
        <img
          className="quality-standard__image"
          src="/images/quality/shri-standard.jpeg"
          alt="An engraved brass bowl filled with long-grain Basmati rice, with golden paddy stalks on burlap."
          width={465}
          height={682}
          loading="lazy"
          decoding="async"
        />
      </div>

      <PaddyIllustration className="quality-standard__motif quality-standard__motif--top-left" />
      <PaddyIllustration className="quality-standard__motif quality-standard__motif--bottom-right" />

      <div className="quality-standard__content">
        <p className="quality-standard__eyebrow">
          <GrainIcon className="quality-standard__eyebrow-icon" />
          The Shri Shri Standard
        </p>

        <h2 id="quality-standard-title" className="quality-standard__title">
          <span className="quality-standard__title-line">
            Quality You Can See.
          </span>{' '}
          <span className="quality-standard__title-line quality-standard__title-line--accent">
            Taste You Can Trust.
          </span>
        </h2>

        <p className="quality-standard__lead">
          Every grain reflects our attention to quality, from its appearance and
          aroma to the experience it brings to the table. Shri Shri Basmati Rice is
          selected with care for meals that deserve authentic Basmati character.
        </p>
      </div>

      <ul className="quality-standard__features">
        {features.map((feature) => (
          <li key={feature.title} className="quality-standard__feature">
            <span className="quality-standard__seal" aria-hidden="true">
              {feature.icon}
            </span>
            <h3 className="quality-standard__feature-title">{feature.title}</h3>
            <span className="quality-standard__feature-rule" aria-hidden="true" />
            <p className="quality-standard__feature-text">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default QualityStandardSection
