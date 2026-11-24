import type { ReactNode, SyntheticEvent } from 'react'
import '../../styles/grain-to-table.css'
import CountrysideLineArt from '../ui/CountrysideLineArt.tsx'
import {
  BowlIcon,
  GearIcon,
  GrainIcon,
  HandSproutIcon,
  SeedlingIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Step {
  icon: ReactNode
  title: [string, string]
  description: [string, string]
}

const steps: Step[] = [
  {
    icon: <SeedlingIcon />,
    title: ['Nurtured', 'in Nature'],
    description: ['Grown in', 'fertile fields.'],
  },
  {
    icon: <HandSproutIcon />,
    title: ['Carefully', 'Selected'],
    description: ['Only the', 'finest grains.'],
  },
  {
    icon: <GearIcon />,
    title: ['Thoughtfully', 'Processed'],
    description: ['Preserving', 'natural quality.'],
  },
  {
    icon: <BowlIcon />,
    title: ['On Your', 'Table'],
    description: ['Wholesome', 'and delicious.'],
  },
]

interface ArchPhoto {
  src: string
  alt: string
  width: number
  height: number
}

const archPhotos: ArchPhoto[] = [
  {
    src: '/images/about/journey-field.jpeg',
    alt: 'Golden Basmati paddy fields at sunset with palm trees and distant hills',
    width: 1024,
    height: 1536,
  },
  {
    src: '/images/about/journey-harvest.jpeg',
    alt: 'An open jute sack of golden paddy grains with a wooden scoop and paddy stalks',
    width: 720,
    height: 1280,
  },
  {
    src: '/images/about/journey-processing.jpeg',
    alt: 'White Basmati rice pouring from a wooden chute into a heap',
    width: 720,
    height: 1280,
  },
  {
    src: '/images/about/journey-table.jpeg',
    alt: 'An engraved brass bowl of steaming cooked Basmati rice garnished with coriander',
    width: 720,
    height: 1280,
  },
]

/* Photos the client has not supplied yet are hidden so the arch's warm
   placeholder shows instead of a broken-image icon. */
function markMissing(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.dataset.missing = 'true'
}

function clearMissing(event: SyntheticEvent<HTMLImageElement>) {
  delete event.currentTarget.dataset.missing
}

function GrainToTableSection() {
  return (
    <section className="grain-table" aria-labelledby="grain-table-title">
      <CountrysideLineArt className="grain-table__countryside" />
      <PaddyIllustration className="grain-table__edge-motif" />

      <div className="grain-table__inner">
        <div className="grain-table__content">
          <p className="grain-table__eyebrow">
            <GrainIcon className="grain-table__eyebrow-icon" />
            From Grain to Table
          </p>

          <h2 id="grain-table-title" className="grain-table__title">
            <span className="grain-table__title-line">A Thoughtful Journey</span>{' '}
            <span className="grain-table__title-line grain-table__title-line--accent">
              From Our Fields to Your Table
            </span>
          </h2>

          <p className="grain-table__lead">
            Every grain of Shri Shri Basmati Rice goes through a careful journey —
            from nurturing in the fields to thoughtful processing, so that you
            can enjoy the same natural goodness and authentic taste in every
            meal.
          </p>

          <ol className="grain-table__steps">
            {steps.map((step) => (
              <li key={step.title.join(' ')} className="grain-table__step">
                <span className="grain-table__seal" aria-hidden="true">
                  {step.icon}
                </span>
                <h3 className="grain-table__step-title">
                  <span>{step.title[0]}</span> <span>{step.title[1]}</span>
                </h3>
                <p className="grain-table__step-text">
                  <span>{step.description[0]}</span>{' '}
                  <span>{step.description[1]}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grain-table__visual">
          <PaddyIllustration className="grain-table__motif" />

          {archPhotos.map((photo) => (
            <div key={photo.src} className="grain-table__arch">
              <img
                className="grain-table__image"
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                onError={markMissing}
                onLoad={clearMissing}
              />
            </div>
          ))}

          <img
            className="grain-table__bowl"
            src="/images/about/journey-bowl.jpeg"
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            onError={markMissing}
            onLoad={clearMissing}
          />
        </div>
      </div>
    </section>
  )
}

export default GrainToTableSection
