import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/hero.css'
import {
  ArrowRightIcon,
  BowlIcon,
  GrainIcon,
  LeafIcon,
} from '../ui/Icons.tsx'

interface QualityAttribute {
  icon: ReactNode
  lines: [string, string]
}

const qualityAttributes: QualityAttribute[] = [
  { icon: <LeafIcon />, lines: ['100%', 'Natural'] },
  { icon: <GrainIcon />, lines: ['Extra', 'Long Grain'] },
  { icon: <BowlIcon />, lines: ['Rich', 'Aroma'] },
]

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <GrainIcon className="hero__motif hero__motif--top" />
      <GrainIcon className="hero__motif hero__motif--bottom" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Pure <span aria-hidden="true">•</span> Aromatic{' '}
            <span aria-hidden="true">•</span> Premium
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line hero__title-line--accent">
              The Finest Basmati,
            </span>{' '}
            <span className="hero__title-line">Made for Every Table.</span>
          </h1>

          <p className="hero__lead">
            Authentic Indian Basmati Rice with naturally long grains, rich
            aroma and exceptional taste for everyday meals and special
            occasions.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="button button--primary">
              Explore Our Rice
              <ArrowRightIcon />
            </Link>
            <Link to="/dealers#dealer-enquiry" className="button button--secondary">
              Become a Dealer
            </Link>
          </div>

          <ul className="hero__attributes">
            {qualityAttributes.map(({ icon, lines }) => (
              <li key={lines.join(' ')} className="hero__attribute">
                <span className="hero__attribute-seal">{icon}</span>
                <span className="hero__attribute-label">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero__media">
        <img
          className="hero__image"
          src="/images/products/classic-1kg.jpeg"
          alt="Shri Shri Basmati Rice Classic 1 kg pack"
          width={1086}
          height={1448}
          fetchPriority="high"
        />
      </div>
    </section>
  )
}

export default HeroSection
