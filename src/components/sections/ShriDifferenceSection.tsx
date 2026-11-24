import type { ReactNode, SyntheticEvent } from 'react'
import '../../styles/shri-difference.css'
import {
  AromaIcon,
  BowlIcon,
  DiamondIcon,
  GrainIcon,
  LeafIcon,
  ShieldIcon,
  StarIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

const DIFFERENCE_IMAGE_SRC = '/images/home/shri-difference.jpeg'

interface BrandValue {
  icon: ReactNode
  title: string
  description: string
}

interface TrustPoint {
  icon: ReactNode
  title: string
  caption: string
}

const brandValues: BrandValue[] = [
  {
    icon: <LeafIcon />,
    title: 'Pure & Natural',
    description: 'Carefully selected with attention to purity.',
  },
  {
    icon: <DiamondIcon />,
    title: 'Premium Quality',
    description: 'Long grains with rich aroma and exceptional taste.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Trusted Quality',
    description: 'Quality and consistency at the heart of every pack.',
  },
  {
    icon: <BowlIcon />,
    title: 'Perfect for Every Meal',
    description: 'Authentic flavour for everyday and special meals.',
  },
]

const trustPoints: TrustPoint[] = [
  { icon: <GrainIcon />, title: 'Pure', caption: 'Carefully Selected' },
  { icon: <StarIcon />, title: 'Quality', caption: 'Consistent Grains' },
  { icon: <LeafIcon />, title: 'Natural', caption: 'Authentic Basmati' },
  { icon: <AromaIcon />, title: 'Aroma', caption: 'Rich Taste & Fragrance' },
]

/* A missing photo is hidden so the warm backdrop shows instead of a
   broken-image icon; a later successful load (e.g. after a refresh) clears it. */
function markMissing(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.dataset.missing = 'true'
}

function clearMissing(event: SyntheticEvent<HTMLImageElement>) {
  delete event.currentTarget.dataset.missing
}

function ShriDifferenceSection() {
  return (
    <section className="difference" aria-labelledby="difference-title">
      <div className="difference__content">
        <p className="difference__eyebrow">
          The Shri Shri Difference
          <GrainIcon className="difference__eyebrow-icon" />
        </p>

        <h2 id="difference-title" className="difference__title">
          <span className="difference__title-line">More Than Just Rice,</span>{' '}
          <span className="difference__title-line difference__title-line--accent">
            A Tradition of Trust
          </span>
        </h2>

        <p className="difference__lead">
          From our fields to your table, every grain of Shri Shri Basmati Rice
          carries a commitment to purity, quality and authentic taste.
        </p>

        <ul className="difference__values">
          {brandValues.map((value) => (
            <li key={value.title} className="difference__value">
              <span className="difference__seal" aria-hidden="true">
                {value.icon}
              </span>
              <h3 className="difference__value-title">{value.title}</h3>
              <p className="difference__value-text">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="difference__media">
        <img
          className="difference__image"
          src={DIFFERENCE_IMAGE_SRC}
          alt="Long-grain Basmati rice in a wooden bowl on a sunlit wooden table with golden paddy stalks and brass vessels"
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
          onError={markMissing}
          onLoad={clearMissing}
        />
      </div>

      <div className="difference__strip">
        <div className="difference__strip-decor" aria-hidden="true">
          <PaddyIllustration className="difference__motif difference__motif--left" />
          <PaddyIllustration className="difference__motif difference__motif--right" />
        </div>

        <h3 className="difference__strip-label">
          Trusted Quality in Every Grain
        </h3>

        <ul className="difference__points">
          {trustPoints.map((point) => (
            <li key={point.title} className="difference__point">
              <span className="difference__point-icon" aria-hidden="true">
                {point.icon}
              </span>
              <span className="difference__point-title">{point.title}</span>
              <span className="difference__point-caption">{point.caption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ShriDifferenceSection
