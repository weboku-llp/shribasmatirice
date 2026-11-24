import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/quality-story.css'
import {
  ArrowRightIcon,
  BowlIcon,
  GrainIcon,
  LeafIcon,
} from '../ui/Icons.tsx'

const QUALITY_IMAGE_SRC = '/images/home/shri-quality-rice.jpeg'

interface QualityPoint {
  icon: ReactNode
  title: string
  description: string
}

const qualityPoints: QualityPoint[] = [
  {
    icon: <GrainIcon />,
    title: 'Extra Long Grain',
    description: 'Beautifully elongated grains with an elegant presentation.',
  },
  {
    icon: <BowlIcon />,
    title: 'Rich Aroma',
    description: 'A distinctive fragrance that elevates every meal.',
  },
  {
    icon: <LeafIcon />,
    title: 'Pure & Natural',
    description: 'Quality rice selected with care for your table.',
  },
]

function QualityStory() {
  const [hasImageError, setHasImageError] = useState(false)

  return (
    <section
      className="quality-story"
      aria-labelledby="quality-story-title"
    >
      <div className="quality-story__visual">
        <span className="quality-story__curve" aria-hidden="true" />
        <div className="quality-story__media">
          {!hasImageError && (
            <img
              className="quality-story__image"
              src={QUALITY_IMAGE_SRC}
              alt="Cooked long-grain Shri Shri Basmati Rice served in a brass bowl"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              onError={() => setHasImageError(true)}
            />
          )}
        </div>
      </div>

      <GrainIcon className="quality-story__motif quality-story__motif--top" />
      <GrainIcon className="quality-story__motif quality-story__motif--bottom" />

      <div className="quality-story__content">
        <div className="quality-story__inner">
          <p className="quality-story__eyebrow">The Shri Shri Promise</p>

          <h2 id="quality-story-title" className="quality-story__title">
            <span className="quality-story__title-line quality-story__title-line--accent">
              A Grain Above
            </span>{' '}
            <span className="quality-story__title-line">the Rest.</span>
          </h2>

          <p className="quality-story__lead">
            Carefully selected for its length, aroma and flavour, Shri Shri Basmati
            Rice brings premium quality to everyday meals and special occasions
            alike.
          </p>

          <ol className="quality-story__list">
            {qualityPoints.map((point, index) => (
              <li key={point.title} className="quality-story__item">
                <span className="quality-story__seal">{point.icon}</span>
                <span className="quality-story__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="quality-story__text">
                  <h3 className="quality-story__item-title">{point.title}</h3>
                  <p className="quality-story__item-description">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link to="/quality" className="quality-story__cta">
            Discover Our Quality
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default QualityStory
