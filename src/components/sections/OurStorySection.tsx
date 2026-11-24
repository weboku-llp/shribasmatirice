import type { ReactNode } from 'react'
import '../../styles/our-story.css'
import CountrysideLineArt from '../ui/CountrysideLineArt.tsx'
import {
  GrainIcon,
  HandSproutIcon,
  LeafIcon,
  ShieldIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface StoryValue {
  icon: ReactNode
  lines: [string, string]
}

const storyValues: StoryValue[] = [
  { icon: <LeafIcon />, lines: ['Traditional', 'Farming Values'] },
  { icon: <HandSproutIcon />, lines: ['Carefully', 'Sourced Grains'] },
  { icon: <ShieldIcon />, lines: ['Committed to', 'Quality'] },
]

/* Loose grains scattered beneath the collage: x, y, rotation. */
const LOOSE_GRAINS: [number, number, number][] = [
  [18, 40, -24], [34, 30, 12], [50, 44, -6], [64, 34, 32],
  [80, 46, -18], [96, 38, 8], [42, 54, 40],
]

function OurStorySection() {
  return (
    <section
      id="our-story"
      className="our-story"
      aria-labelledby="our-story-title"
    >
      <div className="our-story__inner">
        <div className="our-story__content">
          <p className="our-story__eyebrow">
            <GrainIcon className="our-story__eyebrow-icon" />
            Our Story
          </p>

          <h2 id="our-story-title" className="our-story__title">
            <span className="our-story__title-line">A Legacy of</span>{' '}
            <span className="our-story__title-line our-story__title-line--accent">
              Purity and Trust
            </span>
          </h2>

          <p className="our-story__text">
            Shri Shri Basmati Rice is built on a simple belief — that great rice
            begins with respect. Respect for the land, for the people who
            nurture it and for the generations who have cherished its unique
            aroma and taste.
          </p>
          <p className="our-story__text">
            From carefully selected paddy fields to thoughtful processing, we
            stay committed to delivering Basmati rice that brings the goodness
            of nature to your table.
          </p>
        </div>

        <div className="our-story__collage">
          <PaddyIllustration className="our-story__motif our-story__motif--edge" />
          <PaddyIllustration className="our-story__motif our-story__motif--crown" />

          <img
            className="our-story__photo our-story__photo--main"
            src="/images/about/our-story-field.jpeg"
            alt="A farmer’s hand gently holding ripe golden Basmati paddy in a field at sunset"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
          <img
            className="our-story__photo our-story__photo--detail"
            src="/images/about/our-story-rice.jpeg"
            alt="Long-grain Basmati rice in a burlap sack with a wooden scoop and fresh paddy stalks"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
          <img
            className="our-story__photo our-story__photo--landscape"
            src="/images/about/our-story-landscape.jpeg"
            alt="Golden rice fields stretching towards palm trees and mountains at sunrise"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />

          <svg
            className="our-story__grains"
            viewBox="0 0 120 70"
            width="120"
            height="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6 66C22 52 44 30 74 14" />
            <path d="M74 14c6-3 11-4 16-3-4 4-9 6-16 3Z" />
            {LOOSE_GRAINS.map(([x, y, angle]) => (
              <ellipse
                key={`${x}-${y}`}
                cx={x}
                cy={y + 10}
                rx="5.5"
                ry="1.8"
                transform={`rotate(${angle} ${x} ${y + 10})`}
              />
            ))}
          </svg>
        </div>

        <ul className="our-story__values">
          {storyValues.map((value) => (
            <li key={value.lines.join(' ')} className="our-story__value">
              <span className="our-story__seal" aria-hidden="true">
                {value.icon}
              </span>
              <span className="our-story__value-label">
                <span>{value.lines[0]}</span> <span>{value.lines[1]}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <CountrysideLineArt className="our-story__countryside" />
    </section>
  )
}

export default OurStorySection
