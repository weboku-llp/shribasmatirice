import type { MouseEvent } from 'react'
import '../../styles/about-hero.css'
import { ArrowRightIcon, GrainIcon } from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

const STORY_SECTION_ID = 'our-story'

function scrollToStory(event: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById(STORY_SECTION_ID)
  if (!target) return

  event.preventDefault()
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}

function AboutHeroSection() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <img
        className="about-hero__image"
        src="/images/about/about-hero-bg.jpeg"
        alt=""
        width={1983}
        height={793}
        fetchPriority="high"
      />

      <PaddyIllustration className="about-hero__motif" />

      <div className="about-hero__inner">
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">
            About Us
            <GrainIcon className="about-hero__eyebrow-icon" />
          </p>

          <h1 id="about-hero-title" className="about-hero__title">
            <span className="about-hero__title-line">Rooted in Tradition</span>{' '}
            <span className="about-hero__title-line about-hero__title-line--accent">
              Nourishing the Future
            </span>
          </h1>

          <p className="about-hero__lead">
            At Shri Shri Basmati Rice, we bring you the finest grains, nurtured by
            nature and guided by a commitment to purity, quality and authentic
            taste.
          </p>

          <a
            href={`#${STORY_SECTION_ID}`}
            className="button button--primary about-hero__cta"
            onClick={scrollToStory}
          >
            Our Story
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection
